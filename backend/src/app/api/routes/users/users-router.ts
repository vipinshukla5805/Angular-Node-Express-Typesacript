import { RestRouter } from '../../../common';
import { UsersController } from './users-controller';
import { UsersService } from '../../../data';

export class UsersRouter extends RestRouter {
  usersCtrl: UsersController;

  constructor(usersService: UsersService) {
    super();
    this.usersCtrl = new UsersController(usersService);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get('/getlabels', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.getAllLabels));
    this.router.get('/validate', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.validateCheckin));
  }
}