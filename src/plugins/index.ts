'use strict'
import { IHttpFramework } from "../Interfaces/FrameworkApi";
import ExpressFramework from "./http/express";
import FastifyFramework from "./http/fastify";


export const HttpFramework = ExpressFramework