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

// router.route("/add-to-cart").post(Auth,product.addToCart);
// router.route("/get-cart").get(Auth,product.getCart);

router.route('/logout').get(Auth,request.Logout)
router.route('/updatecase/:id').patch(request.updateCase)
router.route('/deletecase/:id').delete(request.deleteCase)

// admin

router.route('/adminregester').post(request.adminRegister)
router.route('/adminlogin').post(request.adminLogin)
router.route('/usercount').get(request.userCount)
router.route('/productcount').get(request.productCount)



router.route("/add-to-cart").post(Auth,request.addToCart);
// router.route("/get-cart").get(Auth,request.getCart);
// router.route('get-cart/:userId/cart').get( Auth,request.getCart);
router.get('/cart/:userId', request.getCart);
// router.route("/increment-cart").post(request.incrementCart);
router.route("/decrement-cart").post(request.decrementCart);
router.route("/delete-cart-item").delete(Auth,request.deleteCartItem);
router.route("/check-cart/:productId").get(Auth,request .checkCart);
export default router