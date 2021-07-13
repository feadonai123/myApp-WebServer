/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  async getByIds(request, response) {
    const {ids} = request.body;
    console.log(ids);
    const filter = {
      id: ids,
    };
    const orders = await Orders.find(filter);
    return response.json({orders});
  }
};

