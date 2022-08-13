import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as compression from "compression";

import { container } from 'tsyringe';
import '../../driven/infra/ioc/container';
import { UserService } from "../../../domain/services/userService";
import { User } from "../../../domain/entities/user";


class StartUp {
  public app: express.Application;
  private userService = container.resolve(UserService);

  constructor() {
    this.app = express();

    this.middler();
    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,DELETE",
      origin: "*"
    };

    this.app.use(cors(options));
  }

  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.2" });
    });

    this.app.route("/users").get(async (req, res) => {
      res.send({ users: await this.userService.get() });
    });

    this.app.post('/users', async (req, res) => {
      let vm = req.body;
      await this.userService.save(new User(vm.name));
      res.status(200).json({ msg: "usuário salvo com sucesso." });
    });

  }
}

export default new StartUp();