const httpStatus = require('http-status');
const passport = require('passport');
const { intersection } = require('lodash');
const APIError = require('../utils/APIError');
const { clevertap } = require('../../config/vars');

const handleJWT = (req, res, next, roles) => async (err, user, info) => {
  const error = err || info;
  req.logIn = Promise.promisify(req.logIn);
  const apiError = new APIError({
    message: error ? error.message : 'Unauthorized',
    status: httpStatus.UNAUTHORIZED,
    stack: error ? error.stack : undefined,
  });

  try {
    if (error || !user) throw error;
    await req.logIn(user, {
      session: false,
    });
  } catch (e) {
    return next(apiError);
  }

  if (intersection(roles, user.roles).length === 0) {
    apiError.status = httpStatus.FORBIDDEN;
    apiError.message = 'Forbidden';
    return next(apiError);
  }

  req.user = user;

  return next();
};

exports.authorize = (roles = User.roles) => (req, res, next) => {
  passport.authenticate(
    'jwt', {
      session: false,
    },
    handleJWT(req, res, next, roles),
  )(req, res, next);
};

exports.authorizeCleverTap = () => (req, res, next) => {
  if (req.headers.authorization && Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString('UTF8').split(':')[1] === clevertap.password) {
    return next();
  }
  return next(new APIError({
    message: 'You are not allowed to access this resource',
    status: httpStatus.UNAUTHORIZED,
    stack: undefined,
  }));
};
