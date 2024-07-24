import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDeliveery/CreateDeliveryController';
import { ensureAuthenticateCliente } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveeryman } from './middlewares/ensureAuthenticateDeliveeryman';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdaetEndDateController';


const routes = Router()

const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliveerymanController = new AuthenticateClientController()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClient = new FindAllDeliveriesController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client/authenticate/", authenticateClientController.handle)
routes.post("/deliveeryman/authenticate/", authenticateDeliveerymanController.handle)

routes.post("/client/", createClientController.handle)
routes.post("/deliveryman/", createDeliverymanController.handle)

routes.post("/delivery/", ensureAuthenticateCliente, createDeliveryController.execute)
routes.get("/delivery/available", ensureAuthenticateDeliveeryman, findAllAvailableController.handle)

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveeryman, updateDeliverymanController.handle)

routes.post("/client/deliveries", ensureAuthenticateCliente, findAllDeliveriesClient.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveeryman, findAllDeliveriesController.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveeryman, updateEndDateController.handle)

export { routes }