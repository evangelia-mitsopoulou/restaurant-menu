(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,i){},102:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),n=i(19),r=i.n(n),l=(i(83),i(27)),o=(i(84),i(69)),c=i.n(o),m=i(13),d=i(14),p=i(16),u=i(15),h=i(17),g=(i(85),i(129)),F=(i(86),i(135)),f=i(126),y=i(123),v=i(125),w=i(124),b=i(127),k=i(128),j=i(103),E=function(e){function t(e){var i;return Object(m.a)(this,t),(i=Object(p.a)(this,Object(u.a)(t).call(this,e))).arr=new Array(i.props.spicyLevel),i.spicyArray=i.setSpicyIcons(i.arr),i.allergy=i.props.allergy.length>1?i.props.allergy.join(","):i.props.allergy,i}return Object(h.a)(t,e),Object(d.a)(t,[{key:"setSpicyIcons",value:function(e){var t;switch(e.length){case 1:t=new Array(1).fill(1);break;case 2:case 3:t=new Array(2).fill(2);break;case 4:t=new Array(3).fill(3);break;default:t=[]}return t}},{key:"render",value:function(){return s.a.createElement(F.a,{onClick:this.props.onClick,key:this.props.id,id:this.props.id,allergy:this.props.allergy},s.a.createElement(y.a,null,s.a.createElement(w.a,{className:"course-card__media",image:this.props.image}),s.a.createElement(v.a,null,s.a.createElement(j.a,{gutterBottom:!0,variant:"h5"}," ",this.props.cardTitle),s.a.createElement(j.a,{className:"block-with-text",gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p"}," ",this.props.description))),s.a.createElement(f.a,null,s.a.createElement("div",{className:"allergy"},this.props.allergy.length>0&&s.a.createElement(b.a,null),s.a.createElement(j.a,{gutterBottom:!0,variant:"subtitle2",color:"textSecondary",component:"p"}," ",this.allergy)),s.a.createElement("div",{className:"spicy"},this.spicyArray.map(function(e,t){return s.a.createElement(k.a,{key:t})}))))}}]),t}(s.a.Component),C=i(40),T=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=C.filter(function(t){return t.courseType==e.props.activeMenu});return s.a.createElement(g.a,{container:!0,alignItems:"center",spacing:1},t.map(function(t){return s.a.createElement(E,{key:t.id,id:t.id,image:t.image,cardTitle:t.title,description:t.description,allergy:t.allery,onClick:e.props.onClick,spicyLevel:t.spiceLevel})}))}}]),t}(s.a.Component),A=(i(101),i(24)),L=i(132),S=i(134),x=i(130),O=i(133);var q=function(e){return s.a.createElement(O.a,{component:"fieldset"},s.a.createElement(S.a,null,A.map(function(t,i){return s.a.createElement(x.a,{key:t.id,checked:t.id==e.activeMenu,disabled:t.id!==e.activeMenu,value:t.menu,control:s.a.createElement(L.a,null),label:t.menu})})))},P=i(65),I=i.n(P),R=i(131),M=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:I.a.navigator},s.a.createElement(R.a,{disabled:!1===this.props.activeButton,variant:"contained",color:"primary",onClick:this.props.onClick},this.props.activeMenu<A.length-1?"Next step":"Results"))}}]),t}(s.a.Component),_=i(71),B=i(66),D=i.n(B),G={0:"Hors d'oeuvres",1:"Soup",2:"Fish",3:"Salad",4:"Main Course",5:"Dessert"},z=function(e){function t(e){var i;return Object(m.a)(this,t),(i=Object(p.a)(this,Object(u.a)(t).call(this,e))).renderResultTitle=function(e,t){return s.a.createElement("span",{key:e.id},e.title," ",t?",":" "," ")},i.selectedCourses=i.props.selectedCourses,i.values=Object(_.a)(i.selectedCourses.values()),i}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:D.a.results},this.values.map(function(t,i){var a=C.filter(function(e){return-1!==t.indexOf(e.id)}),n=!0;if(a.length>0)return s.a.createElement("div",{key:i},s.a.createElement("h3",null,G[a[0].courseType]," "),a.map(function(t,i){return i===a.length-1&&(n=!1),e.renderResultTitle(t,n)}))}))}}]),t}(s.a.Component),X=i(67),N=i.n(X),J=function(e){function t(e){var i;return Object(m.a)(this,t),(i=Object(p.a)(this,Object(u.a)(t).call(this,e))).renderAllergyInfo=function(e,t){return s.a.createElement("span",null,e,t?",":" "," ")},i.list=Array.from(i.props.list),i}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:N.a.allergyInfo},s.a.createElement("span",null," Allergic Ingredients: "),this.list.map(function(t,i){var a=!0;return i===e.list.length-1&&(a=!1),e.renderAllergyInfo(t,a)}))}}]),t}(s.a.Component),H=i(70),W=i(68),V=i.n(W),Y=Object(H.a)({pallete:{primary:V.a},overrides:{MuiButton:{containedPrimary:{backgroundColor:"#f50057","&:hover":{color:"#e8e0e0",backgroundColor:"#f50057"}},contained:{"&.Mui-disabled":{color:"#dcd4d4",backgroundColor:"rgb(90, 44, 44)"}}},MuiPaper:{root:{"&:hover":{border:"2px solid #f50057"}}},MuiRadio:{colorSecondary:{"&.Mui-disabled":{color:"rgba(214, 208, 208, 0.26)"}}},MuiFormControlLabel:{label:{"&.Mui-disabled":{color:"rgba(214, 208, 208, 0.26)"}}},MuiFormGroup:{root:{flexDirection:"row"}}}});var K=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),i=t[0],n=t[1],r=Object(a.useState)(new Map),o=Object(l.a)(r,2),m=o[0],d=o[1],p=Object(a.useState)(new Set),u=Object(l.a)(p,2),h=u[0],g=u[1],F=Object(a.useState)(0),f=Object(l.a)(F,2),y=f[0],v=f[1],w=Object(a.useState)(!0),b=Object(l.a)(w,2),k=b[0],j=b[1];return s.a.createElement(c.a,{theme:Y},s.a.createElement("div",null,s.a.createElement(q,{activeMenu:i}),s.a.createElement(T,{onClick:function(e){e.persist();var t=parseInt(e.currentTarget.id),a=e.currentTarget.getAttribute("allergy"),s=[];e.currentTarget.style.border="2px solid #c51162",s.push(t),d(function(e,t){var a=e.get(i),s="undefined"!==typeof a?t.concat(a):t;return e.set(i,s)}(m,s)),g(function(e,t){var i;if("string"===typeof t&&-1!==t.indexOf(",")&&(t=t.split(",")),"object"===typeof t){var a=!0,s=!1,n=void 0;try{for(var r,l=t[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var o=r.value;i=e.add(o)}}catch(c){s=!0,n=c}finally{try{a||null==l.return||l.return()}finally{if(s)throw n}}}return"string"===typeof t&&t.length>1&&(i=e.add(t)),"string"===typeof t&&0===t.length&&(i=e),i}(h,a)),j(!0)},selectedCourses:m,activeMenu:i}),0===y&&s.a.createElement(M,{activeButton:k,activeMenu:i,onClick:function(e){e.persist(),n(i+1),d(m),v(i!==A.length-1?0:1),j(3!==i)}}),1===y&&s.a.createElement("div",null,s.a.createElement("h1",null,"Your Menu"),s.a.createElement(J,{list:h}),s.a.createElement(z,{selectedCourses:m}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e){e.exports=[{menu:"Hors d'oeuvres",id:0},{menu:"Soup",id:1},{menu:"Fish",id:2},{menu:"Salad",id:3},{menu:"Main course",id:4},{menu:"Desser",id:5}]},40:function(e){e.exports=[{courseType:[0],id:0,title:"Grilled Vegetable Bruschetta",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70",description:"What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?",allery:["milk","gluten"],spiceLevel:0},{courseType:[0],id:1,title:"Zucchini-and-Pepper Gratin with Herbs and Cheese",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F200907-r-zucchini-gratin.jpg&w=1600&q=70",description:"Pleasantly salty Sbrinz to top a gratin made with a ratatouille-like mix of saut\xe9ed zucchini strips, bell peppers and tomato.",allery:["milk"],spiceLevel:0},{courseType:[0],id:2,title:"Scallop Ceviche with Aguachile",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201305-xl-scallop-ceviche-with-aguachile.jpg%3Fitok%3DRoCrD6i6&w=1600&q=70",description:"Aguachile (chile water) is a vibrant sauce made with fresh chiles, herbs and cucumbers that\u2019s fantastic on any type of fish or shellfish. ",allery:["shellfish"],spiceLevel:0},{courseType:[0],id:3,title:"Roast Beef Summer Rolls",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F200909-xl-roast-beef-summer-rolls_0.jpg&w=1600&q=70",description:"Vietnamese summer rolls are often filled with or shrimp, but Grace Parisi makes hers with roast beef from the deli.",allery:[],spiceLevel:0},{courseType:[0],id:4,title:"Grilled Tomato Crostini",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201006-r-xl-grilled-tomato-crostini.jpg%3Fitok%3DNCOaJFQW&w=1600&q=70",description:"Lightly golden brown toast with tomato.",allery:["gluten"],spiceLevel:0},{courseType:[0],id:5,title:"Pickled Shrimp with Creamy Spinach Dip",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201106-xl-pickled-shrimp.jpg%3Fitok%3DIkKE-_0Z&w=1600&q=70",description:"James Holmes grew up in Texas but didn't learn how to make pickled shrimp, a Gulf specialty, until he took a job at a New York City restaurant",allery:["shellfish"],spiceLevel:3},{courseType:[1],id:6,title:"Tomato Soup with Feta, Olives and Cucumbers",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201409-xl-tomato-soup-with-feta-olives-and-cucumber.jpg%3Fitok%3DwVUbCG-4&w=1600&q=70",description:"This pretty, fresh-tasting tomato soup is David Chang\u2019s riff on Greek salad: He tops it with tomatoes, olives, honeyed cucumbers and feta.",allery:[],spiceLevel:0},{courseType:[1],id:7,title:"Miso Soup with Turmeric and Tofu",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201403-xl-miso-soup-with-turmeric-and-tofu.jpg%3Fitok%3DU3Ca3Ky4&w=1600&q=70",description:"Miso soup gets re-imagined by blogger Heidi Swanson, who adds earthy, brilliant yellow turmeric for additional flavor and color.",allery:[],spiceLevel:0},{courseType:[1],id:8,title:"Mint and Pea Soup",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1492007865%2Fmint-and-pea-soup-great-dixter-cookbook-XL-SS0417.jpg&w=1600&q=70",description:"Mint gives this soup a wonderfully fresh taste, and it makes a perfect lunch with some bread and cheese on the side.",allery:["milk"],spiceLevel:0},{courseType:[1],id:9,title:"Tomato Water Gazpacho",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1527191148%2Ftomato-water-gazpacho-xl-RECIPE0718.jpg&w=1600&q=70",description:"The base of it is built on the tomato seeds and pulp, plus the brine of pickled green tomatoes, from an elegant amuse-bouche of Tomato and Watermelon Bites.",allery:[],spiceLevel:1},{courseType:[1,2],id:10,title:"Lobster Bisque",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1527190749%2Flobster-bisque-RECIPE0718.jpg&w=1600&q=70",description:"Lobster shells from the tail, claws, knuckles, and legs are full of flavor and, when very gently simmered in water, yield a clean-tasting, briny stock.",allery:[],spiceLevel:0},{courseType:[2],id:11,title:"Seared Salmon with Summer Vegetables",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fseared-salmon-with-summer-vegetables-XL-RECIPE0918.jpg&w=1600&q=70",description:"The myriad vegetables in the recipe\u2014corn, spinach, shiitakes, and tomato\u2014sing of late summer.",allery:["mushrooms","fish"],spiceLevel:0},{courseType:[2],id:12,title:"Arctic Char with Soba and Green Beans",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1505934922%2Farctic-char-with-soba-and-green-beans-XL-RECIPE1117.jpg&w=1600&q=70",description:"A very refreshing and bright soba noodle salad with green beans, radishes, romaine and fresh basil, and serves it with perfectly crisp pieces of arctic char.",allery:["fish","gluten"],spiceLevel:0},{courseType:[2],id:13,title:"Salmon Yakitori",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1524238015%2Fsalmon-yakitori-XL-RECIPE0618.jpg&w=1600&q=70",description:"A soy sauce, mirin, and brown sugar glaze caramelizes on the fish and baby bok choy as it grills, and also serves as a dipping sauce.",allery:["gluten","fish"],spiceLevel:0},{courseType:[2],id:14,title:"Crab and Smoked Salmon Pintxos with Vanilla Oil",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1501086700%2Fcrab-and-smoked-salmon-pintxos-with-vanilla-oil-XL-RECIPE0917.jpg&w=1600&q=70",description:"These delightful pintxos combine a lemony fresh crab salad with smoked salmon and salty pops of salmon roe.",allery:["fish","shellfish"],spiceLevel:0},{courseType:[3],id:15,title:"Spinach Salad with Ginger-Soy Dressing",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1515599206%2Fspinach-salad-with-ginger-soy-dressing-XL-RECIPE0218.jpg&w=1600&q=70",description:"Fresh ginger warms up the soy-citrus dressing in this hearty spinach salad from New York chef JJ Johnson",allery:["gluten"],spiceLevel:1},{courseType:[3],id:16,title:"Classic Caesar Salad",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201206-xl-classic-caesar-salad.jpg%3Fitok%3DGbtQ427B&w=1600&q=70",description:"This classic Caesar salad is loaded with plenty of garlic, anchovies and Parmigiano cheese. It's also fast and easy to make.",allery:["egg","milk"],spiceLevel:0},{courseType:[3],id:17,title:"Mixed Greens with Poached Eggs, Hazelnuts and Spices",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1470060241%2Fmixed-greens-with-poached-eggs-hazelnuts-and-spices-XL-RECIPE0916.jpg%3Fitok%3DHnaeVt68&w=1600&q=70",description:"At L'Arcangelo restaurant in Rome, chef Arcangelo Dandini makes this simple salad with whichever wild greens happen to be in season at the moment.",allery:["egg","nuts"],spiceLevel:1},{courseType:[3],id:18,title:"Butter Lettuce Salad with Tomato Vinaigrette",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201402-xl-butter-lettuce-salad-with-tomato-vinaigrette.jpg%3Fitok%3D1GPQj37h&w=1600&q=70",description:"This delicious roasted-tomato vinaigrette is enhanced with blue cheese, which makes the dressing extra-thick and rich.",allery:["egg","milk"],spiceLevel:0},{courseType:[3],id:19,title:"Shrimp Salad with Green Curry Dressing",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201504-xl-curried-shrimp-salad.jpg%3Fitok%3DtNKjuRJo&w=1600&q=70",description:"Green curry paste is the secret ingredient in this supersimple, bright and crunchy shrimp salad recipe from F&W\u2019s Justin Chapple.",allery:["shellfish"],spiceLevel:2},{courseType:[4],id:20,title:"Piri Piri Chicken",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1524238015%2Fpiri-piri-chicken-XL-RECIPE0618.jpg&w=1600&q=70",description:"This riff on the piri piri marinade balances the heat of fresh chiles with sweet bell pepper, garlic, and a splash of tangy red wine vinegar.",allery:[],spiceLevel:4},{courseType:[4],id:21,title:"Mojo Pork Steak with Seared Avocados and Oranges",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1524238015%2Fmojo-pork-steak-with-seared-avocados-and-oranges-XL-RECIPE0618.jpg&w=1600&q=70",description:"Chiles, citrus, and garlic make up the classic mojo rub for this family-size blade steak, cut from the pork shoulder.",allery:[],spiceLevel:0},{courseType:[4],id:22,title:"Steak and Brassicas with Red Wine Sauce",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1503509580%2Fsteak-and-brassicas-with-red-wine-sauce-XL-RECIPE1017.jpg&w=1600&q=70",description:"The brassicas here include baby cauliflower, cute 2- to 4-inch heads that come in vibrant colors like green, orange and purple as well as the usual ivory.",allery:[],spiceLevel:0},{courseType:[4],id:23,title:"Brisket with Sweet-and-Sour Onions",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1503509138%2Fbrisket-with-sweet-and-sour-onions-XL-RECIPE1017.jpg&w=1600&q=70",description:"This brisket recipe is from Jessamyn Rodriguez, the founder and CEO of Hot Bread Kitchen, the New York\u2013based social enterprise that helps immigrant women and others launch careers and food businesses.",allery:["gluten"],spiceLevel:0},{courseType:[4],id:24,title:"Veal Roast with Green Mashed Potatoes",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1487780973%2Fveal-roast-with-green-mashed-potatoes-XL-RECIPE0417.jpg&w=1600&q=70",description:"Chef Eli Dahlin of Dame in Portland, Oregon, uses this \u201cbackwards\u201d mashed potato technique for entertaining.",allery:["milk"],spiceLevel:0},{courseType:[5],id:25,title:"Strawberry Almond Cheesecake with Matzoh Crust",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1522077914%2Fstrawberry-almond-cheesecake-with-matzo-crust-FT-RECIPE2018.jpg%3Fitok%3DznBmOoO5&w=1600&q=70",description:"This silky cheesecake gets sweetness and tang from a blend of cream cheese and sour cream.",allery:["milk","egg"],spiceLevel:0},{courseType:[5],id:26,title:"Apple Tart with Apricot Glaze",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1535553436%2Fapple-tart-with-apricot-glaze-XL-RECIPE1018.jpg&w=1600&q=70",description:"This tart is the final dish in a dinner party menu designed by Stitt and inspired by Olney\u2019s love of seasonal produce and great wine.",allery:["gluten","milk"],spiceLevel:0},{courseType:[5],id:27,title:"Classic French Macarons",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F2012-r-xl-classic-french-macarons.jpg%3Fitok%3D-JcpAF79&w=1600&q=70",description:"French macarons (made with almond flour, and distinct from their coconut cousins, macaroons) require some practice and patience.",allery:["gluten","egg"],spiceLevel:0},{courseType:[5],id:28,title:"Ultimate Chocolate Mousse",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fultimate-chocolate-mousse-XL-RECIPE0918.jpg&w=1600&q=70",description:"This is the ultimate, the definitive, the ne plus ultra, the finest chocolate mousse creation ever whipped up.",allery:["egg","milk"],spiceLevel:0},{courseType:[5],id:29,title:"Brown Sugar Cake with Ricotta and Blueberries",image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1527190887%2Fbrown-sugar-cake-with-ricotta-and-blueberries-ft-RECIPE0718.jpg%3Fitok%3D24grW74f&w=1600&q=70",description:"The chewy, dense confection is like a cross between a cake and a blondie. It\u2019s delicious both by itself and dressed up with Ricotta Mousse and Blueberry Sauce.",allery:["egg","gluten"],spiceLevel:0}]},65:function(e,t,i){e.exports={navigator:"navigatorBar_navigator__3Xyvp"}},66:function(e,t,i){e.exports={results:"results_results__bNpBT"}},67:function(e,t,i){e.exports={allergyInfo:"allergyInfo_allergyInfo__1X1gz"}},78:function(e,t,i){e.exports=i(102)},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){}},[[78,1,2]]]);
//# sourceMappingURL=main.e9c01f8e.chunk.js.map