import SMERouter from 'sme-router';
const router = new SMERouter('root'); // #root element is where to render the page

import {signin, index} from '../controllers/index.js';

router.route('/', signin(router));
// router.route('/signin', signin(router));
router.route('/index', index(router));

export default router;