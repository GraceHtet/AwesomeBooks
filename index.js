import navClick from './module/nav.js';

import BookFun from './module/bookFuns.js';

import { formAction, removeAction } from './module/formAction.js';

import runInterval from './module/dateTime.js';

runInterval();

navClick();

const bookFun = new BookFun();
bookFun.showBook();

formAction();
removeAction();
