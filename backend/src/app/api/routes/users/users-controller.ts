import { UsersService, User } from '../../../data';
import { Logger, LoggerFactory, RestController } from '../../../common';

export class UsersController extends RestController {
  constructor(private usersService: UsersService) {
    super();
  }

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  getAllLabels(req, res, next): Promise<any>{
    const language = req.headers['accept-language'];
    return this.usersService.getAllLabels(language)
    .then((labels)=>{
       return this.respond(res,labels);
    })
  }

  validateCheckin(req, res, next): Promise<any>{
    console.log(req);
    const {id,bookingid,familyname} = req.query;
    return this.usersService.validateCheckin(id,bookingid,familyname)
      .then((checkin: boolean | null) => {
        return this.respond(res,{checkinvalid:checkin});
      });
  }
}