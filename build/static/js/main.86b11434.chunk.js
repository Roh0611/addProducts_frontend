(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,u,d,l,j,b,p,m,O=n(18),h=n(0),f=n.n(h),x=n(22),g=n.n(x),v=(n(46),n(7)),y=n(5),S=n(15),w=n(3),I=n(4),C=n(2),k={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],cartTotalQuantity:0,cartTotalAmount:0},N=Object(C.d)({name:"cart",initialState:k,reducers:{addToCart:function(e,t){var n=e.cartItems.findIndex((function(e){return e._id===t.payload._id}));if(n>=0)e.cartItems[n]=Object(I.a)(Object(I.a)({},e.cartItems[n]),{},{cartQuantity:e.cartItems[n].cartQuantity+1}),S.b.info("Increased product quantity",{position:"bottom-left"});else{var r=Object(I.a)(Object(I.a)({},t.payload),{},{cartQuantity:1});e.cartItems.push(r),S.b.success("Product added to cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},decreaseCart:function(e,t){var n=e.cartItems.findIndex((function(e){return e._id===t.payload._id}));if(e.cartItems[n].cartQuantity>1)e.cartItems[n].cartQuantity-=1,S.b.info("Decreased product quantity",{position:"bottom-left"});else if(1===e.cartItems[n].cartQuantity){var r=e.cartItems.filter((function(e){return e._id!==t.payload._id}));e.cartItems=r,S.b.error("Product removed from cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(e.cartItems))},removeFromCart:function(e,t){e.cartItems.map((function(n){if(n._id===t.payload._id){var r=e.cartItems.filter((function(e){return e._id!==n._id}));e.cartItems=r,S.b.error("Product removed from cart",{position:"bottom-left"})}return localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),e}))},getTotals:function(e,t){var n=e.cartItems.reduce((function(e,t){var n=t.price,r=t.cartQuantity,c=n*r;return e.total+=c,e.quantity+=r,e}),{total:0,quantity:0}),r=n.total,c=n.quantity;r=parseFloat(r.toFixed(2)),e.cartTotalQuantity=c,e.cartTotalAmount=r},clearCart:function(e,t){e.cartItems=[],localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),S.b.error("Cart cleared",{position:"bottom-left"})}}}),A=N.actions,_=A.addToCart,E=A.decreaseCart,P=A.removeFromCart,Q=A.getTotals,U=A.clearCart,q=N.reducer,L=n(1),F=function(){var e=Object(w.e)((function(e){return e.products})),t=e.items,n=e.status;Object(w.d)(),Object(y.g)();return Object(L.jsx)("div",{className:"home-container",children:"success"===n?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h2",{children:"New Arrivals"}),Object(L.jsx)("div",{className:"products",children:t&&(null===t||void 0===t?void 0:t.map((function(e){var t;return Object(L.jsxs)("div",{className:"product",children:[Object(L.jsx)("h3",{children:e.name}),Object(L.jsx)("img",{src:null===(t=e.image)||void 0===t?void 0:t.url,alt:e.name}),Object(L.jsxs)("div",{className:"details",children:[Object(L.jsx)("span",{children:e.desc}),Object(L.jsxs)("span",{className:"price",children:["\u20ac",e.price]})]})]},e._id)})))})]}):"pending"===n?Object(L.jsx)("p",{children:"Loading..."}):Object(L.jsx)("p",{children:"Unexpected error occured..."})})},T=n(8),R=n(9),D=n(13),J=n.n(D),z=n(20),B=n(25),H=n(21),M=n.n(H),V="https://avaproducts.netlify.app/.netlify/functions/api",W=function(){return{headers:{"x-auth-token":localStorage.getItem("token")}}},$={token:localStorage.getItem("token"),name:"",email:"",_id:"",isAdmin:!1,registerStatus:"",registerError:"",loginStatus:"",loginError:"",userLoaded:!1},Y=Object(C.c)("auth/registerUser",function(){var e=Object(z.a)(J.a.mark((function e(t,n){var r,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,M.a.post("".concat(V,"/register"),{name:t.name,email:t.email,password:t.password});case 4:return c=e.sent,localStorage.setItem("token",c.data),e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data),e.abrupt("return",r(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),G=Object(C.c)("auth/loginUser",function(){var e=Object(z.a)(J.a.mark((function e(t,n){var r,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,M.a.post("".concat(V,"/login"),{email:t.email,password:t.password});case 4:return c=e.sent,localStorage.setItem("token",c.data),e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0.response),e.abrupt("return",r(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),K=Object(C.c)("auth/getUser",function(){var e=Object(z.a)(J.a.mark((function e(t,n){var r,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,M.a.get("".concat(V,"/user/").concat(t),W());case 4:return c=e.sent,localStorage.setItem("token",c.data),e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0.response),e.abrupt("return",r(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),X=Object(C.d)({name:"auth",initialState:$,reducers:{loadUser:function(e,t){var n=e.token;if(n){var r=Object(B.a)(n);return Object(I.a)(Object(I.a)({},e),{},{token:n,name:r.name,email:r.email,_id:r._id,isAdmin:r.isAdmin,userLoaded:!0})}return Object(I.a)(Object(I.a)({},e),{},{userLoaded:!0})},logoutUser:function(e,t){return localStorage.removeItem("token"),Object(I.a)(Object(I.a)({},e),{},{token:"",name:"",email:"",_id:"",isAdmin:!1,registerStatus:"",registerError:"",loginStatus:"",loginError:""})}},extraReducers:function(e){e.addCase(Y.pending,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{registerStatus:"pending"})})),e.addCase(Y.fulfilled,(function(e,t){if(t.payload){var n=Object(B.a)(t.payload);return Object(I.a)(Object(I.a)({},e),{},{token:t.payload,name:n.name,email:n.email,_id:n._id,isAdmin:n.isAdmin,registerStatus:"success"})}return e})),e.addCase(Y.rejected,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{registerStatus:"rejected",registerError:t.payload})})),e.addCase(G.pending,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{loginStatus:"pending"})})),e.addCase(G.fulfilled,(function(e,t){if(t.payload){var n=Object(B.a)(t.payload);return Object(I.a)(Object(I.a)({},e),{},{token:t.payload,name:n.name,email:n.email,_id:n._id,isAdmin:n.isAdmin,loginStatus:"success"})}return e})),e.addCase(G.rejected,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{loginStatus:"rejected",loginError:t.payload})})),e.addCase(K.pending,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{getUserStatus:"pending"})})),e.addCase(K.fulfilled,(function(e,t){if(t.payload){var n=Object(B.a)(t.payload);return Object(I.a)(Object(I.a)({},e),{},{token:t.payload,name:n.name,email:n.email,_id:n._id,isAdmin:n.isAdmin,getUserStatus:"success"})}return e})),e.addCase(K.rejected,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{getUserStatus:"rejected",getUserError:t.payload})}))}}),Z=X.actions,ee=Z.loadUser,te=Z.logoutUser,ne=X.reducer,re=function(){var e=Object(w.d)(),t=(Object(w.e)((function(e){return e.cart})).cartTotalQuantity,Object(w.e)((function(e){return e.auth})));return console.log(t),Object(L.jsxs)("nav",{className:"nav-bar",children:[Object(L.jsx)(v.b,{to:"/",children:Object(L.jsx)("h2",{children:"Avalanche Admin Dashboard"})}),t._id?Object(L.jsxs)(ae,{children:[t.isAdmin?Object(L.jsx)("div",{children:Object(L.jsx)(v.b,{to:"/admin/summary",children:"Admin"})}):null,Object(L.jsx)("div",{onClick:function(){e(te(null)),S.b.warning("Logged out!",{position:"bottom-left"})},children:"Logout"})]}):Object(L.jsxs)(ce,{children:[Object(L.jsx)(v.b,{to:"/login",children:"Login"}),Object(L.jsx)(v.b,{to:"register",children:"Register"})]})]})},ce=R.a.div(r||(r=Object(T.a)(["\n  a {\n    &:last-child {\n      margin-left: 2rem;\n    }\n  }\n"]))),ae=R.a.div(c||(c=Object(T.a)(["\n  color: white;\n  display: flex;\n\n  div {\n    cursor: pointer;\n\n    &:last-child {\n      margin-left: 2rem;\n    }\n  }\n"]))),ie=function(){return Object(L.jsxs)("div",{className:"not-found",children:[Object(L.jsx)("h2",{children:"404"}),Object(L.jsx)("p",{children:"Page not found"})]})},se=function(e){var t=e.cartItems,n=Object(w.e)((function(e){return e.auth}));return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("button",{onClick:function(){M.a.post("".concat(V,"/stripe/create-checkout-session"),{cartItems:t,userId:n._id}).then((function(e){e.data.url&&(window.location.href=e.data.url)})).catch((function(e){return console.log(e.message)}))},children:"Check out"})})},oe=function(){var e=Object(w.e)((function(e){return e.cart})),t=Object(w.e)((function(e){return e.auth})),n=Object(w.d)(),r=Object(y.g)();Object(h.useEffect)((function(){n(Q())}),[e,n]);return Object(L.jsxs)("div",{className:"cart-container",children:[Object(L.jsx)("h2",{children:"Shopping Cart"}),0===e.cartItems.length?Object(L.jsxs)("div",{className:"cart-empty",children:[Object(L.jsx)("p",{children:"Your cart is currently empty"}),Object(L.jsx)("div",{className:"start-shopping",children:Object(L.jsxs)(v.b,{to:"/",children:[Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(L.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(L.jsx)("span",{children:"Start Shopping"})]})})]}):Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:"titles",children:[Object(L.jsx)("h3",{className:"product-title",children:"Product"}),Object(L.jsx)("h3",{className:"price",children:"Price"}),Object(L.jsx)("h3",{className:"quantity",children:"Quantity"}),Object(L.jsx)("h3",{className:"total",children:"Total"})]}),Object(L.jsx)("div",{className:"cart-items",children:e.cartItems&&e.cartItems.map((function(e){var t;return Object(L.jsxs)("div",{className:"cart-item",children:[Object(L.jsxs)("div",{className:"cart-product",children:[Object(L.jsx)("img",{src:null===(t=e.image)||void 0===t?void 0:t.url,alt:e.name}),Object(L.jsxs)("div",{children:[Object(L.jsx)("h3",{children:e.name}),Object(L.jsx)("p",{children:e.desc}),Object(L.jsx)("button",{onClick:function(){n(P(e))},children:"Remove"})]})]}),Object(L.jsxs)("div",{className:"cart-product-price",children:["$",e.price]}),Object(L.jsxs)("div",{className:"cart-product-quantity",children:[Object(L.jsx)("button",{onClick:function(){n(E(e))},children:"-"}),Object(L.jsx)("div",{className:"count",children:e.cartQuantity}),Object(L.jsx)("button",{onClick:function(){n(_(e))},children:"+"})]}),Object(L.jsxs)("div",{className:"cart-product-total-price",children:["$",e.price*e.cartQuantity]})]},e._id)}))}),Object(L.jsxs)("div",{className:"cart-summary",children:[Object(L.jsx)("button",{className:"clear-btn",onClick:function(){n(U())},children:"Clear Cart"}),Object(L.jsxs)("div",{className:"cart-checkout",children:[Object(L.jsxs)("div",{className:"subtotal",children:[Object(L.jsx)("span",{children:"Subtotal"}),Object(L.jsxs)("span",{className:"amount",children:["$",e.cartTotalAmount]})]}),Object(L.jsx)("p",{children:"Taxes and shipping calculated at checkout"}),t._id?Object(L.jsx)(se,{cartItems:e.cartItems}):Object(L.jsx)("button",{className:"cart-login",onClick:function(){return r("/login")},children:"Login to Check out"}),Object(L.jsx)("div",{className:"continue-shopping",children:Object(L.jsxs)(v.b,{to:"/",children:[Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(L.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(L.jsx)("span",{children:"Continue Shopping"})]})})]})]})]})]})},ue=(n(70),n(10)),de=R.a.form(a||(a=Object(T.a)(["\n  max-width: 350px;\n  width: 100%;\n  margin: 2rem auto;\n\n  h2 {\n    margin-bottom: 1rem;\n  }\n\n  button,\n  input {\n    height: 35px;\n    width: 100%;\n    padding: 7px;\n    outline: none;\n    border-radius: 5px;\n    border: 1px solid rgb(220, 220, 220);\n    margin-bottom: 1rem;\n\n    &:focus {\n      border: 1px solid rgb(0, 208, 255);\n    }\n  }\n\n  button {\n    cursor: pointer;\n\n    &:focus {\n      border: none;\n    }\n  }\n\n  p {\n    font-size: 14px;\n    color: red;\n  }\n"]))),le=function(){var e=Object(w.d)(),t=Object(y.g)(),n=Object(w.e)((function(e){return e.auth})),r=Object(h.useState)({name:"",email:"",password:""}),c=Object(ue.a)(r,2),a=c[0],i=c[1];Object(h.useEffect)((function(){n._id&&t("/cart")}),[n._id,t]);return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(de,{onSubmit:function(t){t.preventDefault(),console.log(a),e(Y(a))},children:[Object(L.jsx)("h2",{children:"Register"}),Object(L.jsx)("input",{type:"text",placeholder:"name",onChange:function(e){return i(Object(I.a)(Object(I.a)({},a),{},{name:e.target.value}))}}),Object(L.jsx)("input",{type:"email",placeholder:"email",onChange:function(e){return i(Object(I.a)(Object(I.a)({},a),{},{email:e.target.value}))}}),Object(L.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return i(Object(I.a)(Object(I.a)({},a),{},{password:e.target.value}))}}),Object(L.jsx)("button",{children:"pending"===n.rigisterStatus?"Submitting...":"Register"}),"rejected"===n.registerStatus?Object(L.jsx)("p",{children:n.registerError}):null]})})},je=function(){var e=Object(y.g)(),t=Object(w.d)(),n=Object(w.e)((function(e){return e.auth})),r=Object(h.useState)({email:"",password:""}),c=Object(ue.a)(r,2),a=c[0],i=c[1];Object(h.useEffect)((function(){n._id&&e("/")}),[n._id,e]);return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(de,{onSubmit:function(e){e.preventDefault(),console.log(a),t(G(a))},children:[Object(L.jsx)("h2",{children:"Login"}),Object(L.jsx)("input",{type:"email",placeholder:"email",onChange:function(e){return i(Object(I.a)(Object(I.a)({},a),{},{email:e.target.value}))}}),Object(L.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return i(Object(I.a)(Object(I.a)({},a),{},{password:e.target.value}))}}),Object(L.jsx)("button",{children:"pending"===n.loginStatus?"Submitting...":"Login"}),"rejected"===n.loginStatus?Object(L.jsx)("p",{children:n.loginError}):null]})})},be=function(){var e=Object(w.d)(),t=Object(w.e)((function(e){return e.cart}));return Object(h.useEffect)((function(){e(U())}),[e]),Object(h.useEffect)((function(){e(Q())}),[t,e]),Object(L.jsxs)(pe,{children:[Object(L.jsx)("h2",{children:"Checkout Successful"}),Object(L.jsx)("p",{children:"Your order might take some time to process."}),Object(L.jsx)("p",{children:"Check your order status at your profile after about 10mins."}),Object(L.jsxs)("p",{children:["Incase of any inqueries contact the support at"," ",Object(L.jsx)("strong",{children:"support@onlineshop.com"})]})]})},pe=R.a.div(i||(i=Object(T.a)(["\n  min-height: 80vh;\n  max-width: 800px;\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  h2 {\n    margin-bottom: 0.5rem;\n    color: #029e02;\n  }\n"]))),me=function(){return Object(w.e)((function(e){return e.auth})).isAdmin?Object(L.jsxs)(Oe,{children:[Object(L.jsxs)(he,{children:[Object(L.jsx)("h3",{children:"Quick Links"}),Object(L.jsx)(v.c,{className:function(e){return e.isActive?"link-active":"link-inactive"},to:"/admin/summary",children:"Summary"}),Object(L.jsx)(v.c,{className:function(e){return e.isActive?"link-active":"link-inactive"},to:"/admin/products",children:"Add Products"})]}),Object(L.jsx)(fe,{children:Object(L.jsx)(y.a,{})})]}):Object(L.jsx)("p",{children:"Access denied. Not an Admin!"})},Oe=R.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  height: 100vh;\n"]))),he=R.a.div(o||(o=Object(T.a)(["\n  border-right: 1px solid gray;\n  height: calc(100vh - 70px);\n  position: fixed;\n  overflow-y: auto;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n\n  h3 {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    text-transform: uppercase;\n    font-size: 17px;\n  }\n\n  a {\n    text-decoration: none;\n    margin-bottom: 1rem;\n    font-size: 14px;\n  }\n"]))),fe=R.a.div(u||(u=Object(T.a)(["\n  margin-left: 200px;\n  padding: 2rem 3rem;\n  width: 100%;\n"]))),xe=R.a.div(d||(d=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),ge=R.a.button(l||(l=Object(T.a)(["\n  padding: 9px 12px;\n  border-radius: 5px;\n  font-weight: 400;\n  letter-spacing: 1.15px;\n  background-color: #4b70e2;\n  color: #f9f9f9;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin: 0.5rem 0;\n"]))),ve=function(){var e=Object(y.g)();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(xe,{children:[Object(L.jsx)("h2",{children:"Add Products"}),Object(L.jsx)(ge,{onClick:function(){return e("/admin/products/create-product")},children:"Create"})]}),Object(L.jsx)(y.a,{})]})},ye=function(){return Object(L.jsx)("h2",{children:"Users"})},Se=function(){return Object(L.jsx)("h2",{children:"Orders"})},we=function(){return Object(L.jsx)("h2",{children:"Summary"})},Ie=Object(C.c)("products/productsFetch",Object(z.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat(V,"/products"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),Ce=Object(C.c)("products/productsCreate",function(){var e=Object(z.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("".concat(V,"/products"),t,W());case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),S.b.error(null===(r=e.t0.response)||void 0===r?void 0:r.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),ke=Object(C.d)({name:"products",initialState:{items:[],status:null,createStatus:null},reducers:{},extraReducers:(j={},Object(O.a)(j,Ie.pending,(function(e,t){e.status="pending"})),Object(O.a)(j,Ie.fulfilled,(function(e,t){e.items=t.payload,e.status="success"})),Object(O.a)(j,Ie.rejected,(function(e,t){e.status="rejected"})),Object(O.a)(j,Ce.pending,(function(e,t){e.createStatus="pending"})),Object(O.a)(j,Ce.fulfilled,(function(e,t){e.items.push(t.payload),e.createStatus="success",S.b.success("Product Created!")})),Object(O.a)(j,Ce.rejected,(function(e,t){e.createStatus="rejected"})),j)}).reducer,Ne=function(){var e=Object(w.d)(),t=Object(w.e)((function(e){return e.products})).createStatus,n=Object(h.useState)(""),r=Object(ue.a)(n,2),c=r[0],a=r[1],i=Object(h.useState)(""),s=Object(ue.a)(i,2),o=s[0],u=s[1],d=Object(h.useState)(""),l=Object(ue.a)(d,2),j=l[0],b=l[1],p=Object(h.useState)(""),m=Object(ue.a)(p,2),O=m[0],f=m[1],x=Object(h.useState)(""),g=Object(ue.a)(x,2),v=g[0],y=g[1],S=function(e){var t=new FileReader;e?(t.readAsDataURL(e),t.onloadend=function(){a(t.result)}):a("")},I=function(){var t=Object(z.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(Ce({name:j,brand:o,price:O,desc:v,image:c}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(L.jsxs)(_e,{children:[Object(L.jsxs)(Ae,{onSubmit:I,children:[Object(L.jsx)("h3",{children:"Create a Product"}),Object(L.jsx)("input",{id:"imgUpload",accept:"image/*",type:"file",onChange:function(e){var t=e.target.files[0];S(t)},required:!0}),Object(L.jsxs)("select",{onChange:function(e){return u(e.target.value)},required:!0,children:[Object(L.jsx)("option",{value:"",children:"Select Brand"}),Object(L.jsx)("option",{value:"other",children:"Other"})]}),Object(L.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){return b(e.target.value)},required:!0}),Object(L.jsx)("input",{type:"number",placeholder:"Price",onChange:function(e){return f(e.target.value)},required:!0}),Object(L.jsx)("input",{type:"text",placeholder:"Short Description",onChange:function(e){return y(e.target.value)},required:!0}),Object(L.jsx)(ge,{type:"submit",children:"pending"===t?"Submitting":"Submit"})]}),Object(L.jsx)(Ee,{children:c?Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("img",{src:c,alt:"error!"})}):Object(L.jsx)("p",{children:"Product image upload preview will appear here!"})})]})},Ae=R.a.form(b||(b=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  margin-top: 2rem;\n\n  select,\n  input {\n    padding: 7px;\n    min-height: 30px;\n    outline: none;\n    border-radius: 5px;\n    border: 1px solid rgb(182, 182, 182);\n    margin: 0.3rem 0;\n\n    &:focus {\n      border: 2px solid rgb(0, 208, 255);\n    }\n  }\n\n  select {\n    color: rgb(95, 95, 95);\n  }\n"]))),_e=R.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Ee=R.a.div(m||(m=Object(T.a)(["\n  margin: 2rem 0 2rem 2rem;\n  padding: 2rem;\n  border: 1px solid rgb(183, 183, 183);\n  max-width: 300px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: rgb(78, 78, 78);\n\n  img {\n    max-width: 100%;\n  }\n"])));var Pe=function(){var e=Object(w.d)();return Object(h.useEffect)((function(){e(ee(null))}),[e]),Object(L.jsx)("div",{className:"App",children:Object(L.jsxs)(v.a,{children:[Object(L.jsx)(S.a,{}),Object(L.jsx)(re,{}),Object(L.jsx)("div",{className:"content-container",children:Object(L.jsxs)(y.d,{children:[Object(L.jsx)(y.b,{path:"/",element:Object(L.jsx)(F,{})}),Object(L.jsx)(y.b,{path:"/cart",element:Object(L.jsx)(oe,{})}),Object(L.jsx)(y.b,{path:"/checkout-success",element:Object(L.jsx)(be,{})}),Object(L.jsx)(y.b,{path:"/register",element:Object(L.jsx)(le,{})}),Object(L.jsx)(y.b,{path:"/login",element:Object(L.jsx)(je,{})}),Object(L.jsxs)(y.b,{path:"/admin",element:Object(L.jsx)(me,{}),children:[Object(L.jsx)(y.b,{path:"summary",element:Object(L.jsx)(we,{})}),Object(L.jsx)(y.b,{path:"products",element:Object(L.jsx)(ve,{}),children:Object(L.jsx)(y.b,{path:"create-product",element:Object(L.jsx)(Ne,{})})}),Object(L.jsx)(y.b,{path:"users",element:Object(L.jsx)(ye,{})}),Object(L.jsx)(y.b,{path:"orders",element:Object(L.jsx)(Se,{})})]}),Object(L.jsx)(y.b,{path:"*",element:Object(L.jsx)(ie,{})})]})})]})})},Qe=n(41),Ue=n(14),qe=Object(Qe.a)({reducerPath:"productsApi",baseQuery:Object(Ue.d)({baseUrl:"".concat(V)}),endpoints:function(e){return{getAllProducts:e.query({query:function(){return"products"}})}}}),Le=(qe.useGetAllProductsQuery,Object(C.a)({reducer:Object(O.a)({products:ke,cart:q,auth:ne},qe.reducerPath,qe.reducer),middleware:function(e){return e().concat(qe.middleware)}}));Le.dispatch(Ie()),Le.dispatch(Q()),g.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)(w.a,{store:Le,children:Object(L.jsx)(Pe,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.86b11434.chunk.js.map