import Router from 'express'
import * as request from './requestHandler.js'
import Auth from './middleware/auth.js'

const router=Router()


router.route('/addcase').post(request.addCase)
router.route('/getcase').get(request.getCase)
router.route('/getcaseedit/:id').get(request.getCaseEdit)

router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)
// router.route('/home').post(Auth,request.Home)
router.route('/home').get(Auth,request.Home)

router.route('/addcart').post(Auth,request.addCart)
router.route('/getcart').get(Auth,request.getCart)
router.route('/logout').get(Auth,request.Logout)
router.route('/updatecase/:id').patch(request.updateCase)
router.route('/deletecase/:id').delete(request.deleteCase)

export default router