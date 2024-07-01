import BrandService from "../../services/brand.js"
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    const data = await BrandService.getAll(req.user._id)

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data)
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data)
    }
  },
  
  getById: async (req, res) => {
    const data = await BrandService.getById(req.params.id)

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data)
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data)
    }
  },

  post: async (req, res) => {
    req.body.user_id = req.user._id
    const data = await BrandService.add(req.body)

    if (data.message === "success") {
      return httpResponse.CREATED(res, data.data)
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data)
    }
  },

  update: async (req, res) => {
    req.body.id = req.params.id

    const data = await BrandService.update(req.body)

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data)
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data)
    }
  },

  delete: async (req, res) => {
    const data = await BrandService.removeById(req.params.id)

    if (data.message === "success") {
      return httpResponse.SUCCESS(res, data.data)
    } else {
      return httpResponse.INTERNAL_SERVER(res, data.data)
    }
  }
}

export default controller
