import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Blog from "../Pages/Blog/Blog";
import Books from "../Pages/Books/Books";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportAdmin from "../Pages/Dashboard/Admin/ReportAdmin/ReportAdmin";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Buyer/Payment/Payment";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/HomePage/Home/Home";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import ContactUs from "../Pages/HomePage/ContactUs/ContactUs";
import ProductDetails from "../Pages/Books/ProductDetails";
import Cart from "../Pages/Books/Cart/Cart";
import AdvertiseItems from "../Pages/HomePage/AdvertiseItems/AdvertiseItems";
import PaymentCartItems from "../Pages/Dashboard/Buyer/Payment/PaymentCartItems";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/cartItemsPayments",
                element: <PaymentCartItems></PaymentCartItems>
            },
            {
                path: "/advertiseItems",
                element: <AdvertiseItems></AdvertiseItems>

            }

            ,

            {
                path: "/categories/:name",
                element: <Books></Books>,
                loader: ({ params }) => fetch(`https://buy-sell-store-backend.vercel.app/categories/${params.name}`)
            },
            {
                path: "/product/:productId",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://buy-sell-store-backend.vercel.app/product/${params.productId}`)
            },
        ],

    },

    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><Welcome></Welcome></PrivateRoute>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproduct",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/mybuyer",
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: "/dashboard/all-seller",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/all-buyer",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/reported-items",
                element: <AdminRoute><ReportAdmin></ReportAdmin></AdminRoute>
            },
            {
                path: "/dashboard/my-orders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://buy-sell-store-backend.vercel.app/payment/${params.id}`)
            },
        ]
    }
])