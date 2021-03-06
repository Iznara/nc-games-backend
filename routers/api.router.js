const apiRouter = require('express').Router();
const { getSummary } = require('../controllers/api_summary.controller.js');
const categoriesRouter = require('./categories.router.js');
const commentsRouter = require('./comments.router.js');
const reviewsRouter = require('./reviews.router.js');
const usersRouter = require('./users.router.js');

apiRouter.route('/').get(getSummary);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/comments', commentsRouter);
apiRouter.use('/reviews', reviewsRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
