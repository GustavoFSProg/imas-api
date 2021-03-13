/* eslint-disable no-undef */
import { Schema, model, Types } from 'mongoose'
import categoryModel from './categoryModel'

const schema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
      index: true,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: categoryModel,
      required: true,
    },
    peso: {
      type: Types.Decimal128,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model('productsModel', schema)
