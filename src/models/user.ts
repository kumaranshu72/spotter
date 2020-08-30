import { Document, Model, model } from 'mongoose'

import { IUser } from '../interfaces'
import { schemaNames, UserSchema } from '../schema'

export interface IUserModel extends IUser, Document {
}

export const User: Model<IUserModel> = model<IUserModel>(schemaNames.USER, UserSchema)
