import Router from 'express'
import * as request from './requestHandler.js'
import Auth from './middleware/auth.js'


const router=Router()


router.route('/addcase').post(request.addCase)
router.route('/getcase').get(request.getCase)
router.route('/getcaseedit/:id').get(request.getCaseEdit)

router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)
// router.route('/forgot').post(request.Forget)

router.route('/adminforgot').post(request.adminForget)
router.route('/adminotp').post(request.adminOtp)

router.route('/adminhome').post(Auth,request.adminHome)
router.route('/home').post(Auth,request.Home)

router.route('/addcart').post(Auth,request.addCart)
router.route('/getcart').get(Auth,request.getCart)
router.route('/logout').get(Auth,request.Logout)
router.route('/updatecase/:id').patch(request.updateCase)
router.route('/deletecase/:id').delete(request.deleteCase)

// admin

router.route('/adminregester').post(request.adminRegister)
router.route('/adminlogin').post(request.adminLogin)

export default router