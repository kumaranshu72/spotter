import { expect } from 'chai'
import 'mocha'
import request from 'supertest'

import app from '../../src/app'

const HEALTH_TEST_URL = '/v1/health'

describe(`GET ${HEALTH_TEST_URL} - Test Cases`, () => {
  it('should return 200', () => {
    console.log('test github actions')
    return request(app)
      .get(HEALTH_TEST_URL)
      .expect(200)
      .then(response => {
        expect(response.body).to.have.a('object')
      })
  })
})
