jest.useFakeTimers()
const helper = require('../utils/helper')
const {Short} = require('../models/short.model')
const sequelize = require('sequelize')

jest.mock('../models/short.model.js')

