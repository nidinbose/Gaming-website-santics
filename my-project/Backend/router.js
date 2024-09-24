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
router.route('/resetadminpassword').post(request.resetAdminPassword)

router.route('/adminhome').post(Auth,request.adminHome)
router.route('/home').get(Auth,request.Home)

router.get('/cart/:userId', request.getCart);
router.route("/add-to-cart").post(Auth,request.addToCart);
// router.delete("/remove/:productId", Auth, request.removeFromCart);
router.post('/remove-from-cart', request.removeFromCart);
router.route("/decrement-cart").post(request.decrementCart);
router.route('cart/increment').put(Auth,request.incrementCart)

router.route('/logout').get(Auth,request.Logout)
router.route('/updatecase/:id').patch(request.updateCase)
router.route('/deletecase/:id').delete(request.deleteCase)

// admin

router.route('/adminregester').post(request.adminRegister)
router.route('/adminlogin').post(request.adminLogin)
router.route('/usercount').get(request.userCount)
router.route('/productcount').get(request.productCount)





export default router