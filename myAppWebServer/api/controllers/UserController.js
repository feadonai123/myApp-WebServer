/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  teste(request, response) {
    return response.json({'teste': 'sucesso'});
  }

};

