﻿(self.webpackChunkvk=self.webpackChunkvk||[]).push([[2807],{46545:function(t,e,r){"use strict";var o=r(57649),n=r(72455),a=r(20848),i=r(53810),s=r(61540);const l=(t,e,r,o,n,a,i,s,l,h,c)=>{const d=s||o,u=l||n,p=h||a||e.naturalWidth,_=c||i||e.naturalHeight;t.beginPath(),t.arc(d+r,u+r,r,Math.PI,Math.PI+Math.PI/2),t.lineTo(d+p-r,u),t.arc(d+p-r,u+r,r,Math.PI+Math.PI/2,2*Math.PI),t.lineTo(d+p,u+_-r),t.arc(d+p-r,u+_-r,r,2*Math.PI,Math.PI/2),t.lineTo(d+r,u+_),t.arc(d+r,u+_-r,r,Math.PI/2,Math.PI),t.closePath(),t.save(),t.clip(),t.drawImage(e,o,n,a,i,s,l,h,c),t.restore()},h=(t,e,r,o,n,a)=>{let i={};if("number"==typeof a)i={tl:a,tr:a,br:a,bl:a};else{const t={tl:0,tr:0,br:0,bl:0};for(let e in t)i[e]=i[e]||t[e]}t.save(),t.beginPath(),t.moveTo(e+i.tl,r),t.lineTo(e+o-i.tr,r),t.quadraticCurveTo(e+o,r,e+o,r+i.tr),t.lineTo(e+o,r+n-i.br),t.quadraticCurveTo(e+o,r+n,e+o-i.br,r+n),t.lineTo(e+i.bl,r+n),t.quadraticCurveTo(e,r+n,e,r+n-i.bl),t.lineTo(e,r+i.tl),t.quadraticCurveTo(e,r,e+i.tl,r),t.closePath(),t.restore()};function c(t,e,r,o,n,a=0){return new Promise(((i,l)=>{("string"==typeof t?(0,s.loadImage)(t):Promise.resolve(t)).then((t=>{const h=document.createElement("canvas");h.width=90===a||270===a?t.naturalHeight:t.naturalWidth,h.height=90===a||270===a?t.naturalWidth:t.naturalHeight;const c=h.getContext("2d");if(!c)return void i(t);c.fillStyle="#fff",c.fillRect(0,0,c.canvas.width,c.canvas.height),a?(c.translate(h.width/2,h.height/2),c.rotate(a*Math.PI/180),c.drawImage(t,-t.naturalWidth/2,-t.naturalHeight/2)):c.drawImage(t,0,0);const d=c.getImageData(e,r,o,n),u=document.createElement("canvas");u.width=o,u.height=n;const p=u.getContext("2d");if(p)return p.putImageData(d,0,0),(0,s.loadImage)(u.toDataURL("image/jpeg",1)).then(i).catch(l);i(t)})).catch(l)}))}function d(t,e,r){const{pollStickerX:o,pollStickerY:n,pollStickerWidth:a,pollStickerHeight:i,pollStickerOffset:s}=Object.assign({},{pollStickerX:157,pollStickerY:1075,pollStickerWidth:760,pollStickerHeight:391,pollStickerOffset:45},r||{}),l=i+s;return{type:"poll",poll_id:e,poll_owner_id:t,clickable_area:[{x:o,y:n},{x:o+a,y:n},{x:o+a,y:n+l},{x:o,y:n+l}]}}const u={title:"",titleColor:"#000",titleAlign:"center",titleFontSize:58,titleFont:"TT Commons",voteButtonText:window.getLang("stories_poll_sticker_vote_button_text"),voteButtonTextAlign:"center",voteButtonTextColor:"#fff",voteButtonFontSize:49,voteButtonFont:"TT Commons",voteButtonBackgroundColor:"#3F8AE0",width:760,height:391,radius:50,offset:45,backgroundColor:"#fff",backgroundCircleColor:"#fff",backgroundCircleSize:90,foregroundCircleColor:"#3F8AE0",foregroundCircleSize:72};function p(t){return(0,s.loadImage)("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDJhMiAyIDAgMTE0IDB2MjBhMiAyIDAgMTEtNCAwVjJ6bTggMTJhMiAyIDAgMTE0IDB2OGEyIDIgMCAxMS00IDB2LTh6TTIgOGEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMTA0IDBWMTBhMiAyIDAgMDAtMi0yeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==").then((e=>{const{title:r,titleColor:o,titleAlign:n,titleFontSize:a,titleFont:i,voteButtonText:s,voteButtonTextAlign:l,voteButtonTextColor:c,voteButtonFontSize:d,voteButtonFont:u,voteButtonBackgroundColor:_,width:g,height:w,radius:v,offset:m,backgroundColor:f,backgroundCircleColor:b,backgroundCircleSize:S,foregroundCircleColor:A,foregroundCircleSize:P}=Object.assign({},p.defaultOptions,t||{}),E=document.createElement("canvas"),O=E.getContext("2d");if(!O)return Promise.reject("canvas context not found");E.width=Number(g),E.height=Number(w)+Number(m),O.fillStyle=String(f||""),h(O,0,Number(m),Number(g),Number(w),Number(v)),O.fill(),O.fillStyle=String(b||""),O.beginPath(),O.arc(Number(g)/2,Number(S),Number(S),0,2*Math.PI,!1),O.fill(),O.fillStyle=String(A||""),O.beginPath(),O.arc(Number(g)/2,Number(S),Number(P),0,2*Math.PI,!1),O.fill();O.drawImage(e,Number(g)/2-27,Number(S)-36,54,72),O.save(),O.font=`500 ${a}px ${i}`,O.fillStyle=String(o||""),O.textAlign=String(n||""),O.fillText(r,Number(g)/2,230),O.restore(),O.save();const C=Number(g)-75,N=(Number(g)-C)/2,x=Number(w)+Number(m)-103-35;O.fillStyle=String(_||""),h(O,N,x,C,103,29),O.fill(),O.restore(),O.save();const T=Number(g)/2,y=Number(w)+Number(m)-103+30;return O.font=`500 ${d}px ${u}`,O.fillStyle=String(c||""),O.textAlign=String(l||""),O.fillText(String(s||""),T,y),O.restore(),E}))}p.defaultOptions=u;const _={newAvatarUrl:"",oldAvatarUrl:"",newAvatarStrokeWidth:17,newAvatarStrokeColor:"#fff",oldAvatarStrokeWidth:17,oldAvatarStrokeColor:"#fff",baseWidth:1080,baseHeight:1920,displayWidth:375,backgroundColor:"rgba(0, 0, 0, .16)",newAvatarInBackgroundBlur:160,avatarWidth:500,title:window.getLang("stories_new_avatar_story_title_header"),titleColor:"#fff",titleTextAlign:"center",titleFont:"TT Commons",titleFontSize:69,titleLineHeight:87,titleShadowOffsetX:0,titleShadowOffsetY:4,titleShadowBlur:12,titleShadowColor:"rgba(0, 0, 0, 0.24)",pollStickerX:157,pollStickerY:1075,blobImageType:"image/jpeg",blobQuality:1};function g(t,e){let{newAvatarUrl:r,oldAvatarUrl:o,newAvatarStrokeWidth:n,newAvatarStrokeColor:a,oldAvatarStrokeWidth:i,oldAvatarStrokeColor:h,baseWidth:c,baseHeight:d,displayWidth:u,backgroundColor:_,newAvatarInBackgroundBlur:w,avatarWidth:v,title:m,titleColor:f,titleTextAlign:b,titleFont:S,titleFontSize:A,titleLineHeight:P,titleShadowOffsetX:E,titleShadowOffsetY:O,titleShadowBlur:C,titleShadowColor:N,pollStickerX:x,pollStickerY:T,pollStickerOptions:y,blobImageType:I,blobQuality:k}=Object.assign({},g.defaultOptions,t||{});c=c||Number(g.defaultOptions.baseWidth),d=d||Number(g.defaultOptions.baseHeight),u=u||Number(g.defaultOptions.displayWidth),y=Object.assign({},{title:window.getLang("stories_new_avatar_story_poll_sticker_title")},y||{});const U=u*(d/c),L=e||document.createElement("canvas"),M=L.getContext("2d");return M?(L.width=c,L.height=d,L.style.width=`${u}px`,L.style.height=`${U}px`,new Promise(((t,e)=>{(0,s.loadImages)([r,o]).then((([r,o])=>{M.clearRect(0,0,L.width,L.height),M.fillStyle=String(_||""),M.fillRect(0,0,L.width,L.height),M.save(),M.filter=`blur(${w}px)`;const c=((t,e,r,o,n,a)=>{const i=t/e;let s,l;return i>r/o?(s=o,l=o*i):(l=r,s=r/i),{width:l,height:s,offsetLeft:(r-l)*(n=void 0===n?.5:n),offsetTop:(o-s)*(a=void 0===a?.5:a)}})(r.naturalWidth,r.naturalHeight,L.width,L.height,.5,.5);if(M.drawImage(r,c.offsetLeft,c.offsetTop,c.width,c.height),M.restore(),"none"!==M.filter){const t=(0,s.getAverageRGB)(M);M.fillStyle=`rgb(${t.r}, ${t.g}, ${t.b})`,M.fillRect(0,0,L.width,L.height)}M.save(),M.shadowOffsetX=Number(E),M.shadowOffsetY=Number(O),M.shadowBlur=Number(C),M.shadowColor=String(N||""),M.font=`600 ${A}px/${P}px ${S}`,M.fillStyle=String(f||""),M.textAlign=String(b);const d=m?.split("{br}");d?.forEach(((t,e)=>{const r=Number(P)*e,o=L.width/2,n=L.height/2-Number(P)*d.length/2+r-395;M.fillText(t,o,n)})),M.restore();const u=(L.width-Number(v))/2,g=Math.min(o.width,o.height),U=Math.min(r.width,r.height);M.save(),l(M,o,Number(v)/2,0,0,g,g,u-165,665,Number(v),Number(v)),M.lineWidth=Number(i),M.strokeStyle=String(h),M.stroke(),l(M,r,Number(v)/2,0,0,U,U,u+165,665,Number(v),Number(v)),M.lineWidth=Number(n),M.strokeStyle=String(a),M.stroke(),M.restore(),p(y).then((e=>{M.drawImage(e,Number(x),Number(T)),L?.toBlob(t,I,k)})).catch(e)})).catch(e)}))):Promise.reject(new Error("canvas context not found"))}g.defaultOptions=_;var w=r(85701),v=r(57141),m=r(41319);const f={openNewAvatarStory:function(t,e,r){t.metaKey||t.ctrlKey||(t.preventDefault(),window.Stories.init(`${e}/${e}_${r}`,{source:m.StorySource.PROFILE_SNACKBAR}))},saveNewAvatarStory:function(t,e){return(0,w.saveStoryOnServer)(e,t.newAvatarStorySaveHash).then((t=>t.story)).catch((t=>{v.init({type:v.SNACKBAR_TYPE_ERROR,text:t&&t.message||(0,a.getLang)("global_error")})}))},initNewAvatarStory:function(t,e,r){return(0,i.addStatic)([t.newAvatarStoryFontsCssPath]).then((()=>Promise.all([(0,s.loadFontFacePromise)("TT Commons",{weight:500}),(0,s.loadFontFacePromise)("TT Commons",{weight:600})]))).then((()=>{return Promise.all([g({newAvatarUrl:r,oldAvatarUrl:t.currentPhoto,title:(0,a.getLang)("mobile_stories_new_avatar_story_title_header"),pollStickerOptions:{title:(0,a.getLang)("mobile_stories_new_avatar_story_poll_sticker_title"),voteButtonText:(0,a.getLang)("mobile_stories_poll_sticker_vote_button_text")}}),(o=t.newAvatarStoryCreatePollHash,new Promise(((t,e)=>{window.ajax.post((0,s.isMvk)()?"stories.php":"al_stories.php",{act:"create_new_avatar_poll",hash:o},{onDone:t,onError:e,onFail:e})}))).then((t=>t||Promise.reject())).then((r=>(0,w.getStoryUploadUrl)({clickable_stickers:JSON.stringify({original_width:1080,original_height:1920,clickable_stickers:[d(e,r)]}),hash:t.newAvatarStoryUploadUrlHash,entry_point:m.StoryEntryPoint.CHANGE_AVATAR,ref:window.cur.module})))]).then((([t,e])=>window.StoryPublisher.uploadStoryBlobToServer(t,e)));var o}))}};window.NewAvatarStory=f;var b=r(11639),S=r(62641);function A(t={}){var e=(0,S.winToUtf)(t.ownerName);return{inner:[{inner:[(0,S.getLang)("mobile_owner_avatar_edit_preview_header")],class:"OwnerAvatarEditPreview__header",tag:"div"},{inner:[{class:"OwnerAvatarEditPreviewThumbnail__preview",tag:"div"},{inner:[{inner:[e],class:"OwnerAvatarEditPreviewThumbnail__ownerName",tag:"div"},{inner:[(0,S.getLang)("mobile_owner_avatar_edit_preview_thumbnail_description")],class:"OwnerAvatarEditPreviewThumbnail__description",tag:"div"}],class:"OwnerAvatarEditPreviewThumbnail__content",tag:"div"}],class:"OwnerAvatarEditPreviewThumbnail",tag:"div"}],class:"OwnerAvatarEditPreview",tag:"div"}}var P=r(93736),E=r(39871),O=r(49598),C=r(81294),N=r(88833),x=r(95759),T=r(16334);function y(t={}){var{avatarSrc:e,config:r={},isNft:o}=t,n=r.new_avatar_story_data&&r.new_avatar_story_data.shouldCreateNewAvatarStory;return{inner:[{inner:[o?(0,T.NFTAvatar)({mix:"OwnerAvatarEditPublisherStep__avatar",size:192,src:e}):(0,x.Avatar)({mix:"OwnerAvatarEditPublisherStep__avatar",size:192,src:e}),{inner:[r.description],class:"OwnerAvatarEditPublisherStep__description",tag:"div"}],class:"OwnerAvatarEditPublisherStep__previewWrapper",tag:"div"},{inner:[(0,N.default)({type:"switcher",name:"OwnerAvatarEditPublisherStepPublishPost",label:r.publish_post_checkbox_label,checked:!0,onChange:t.onPostPublishChange}),n?(0,N.default)({type:"switcher",name:"OwnerAvatarEditPublisherStepPublishStory",label:r.publish_story_checkbox_label,checked:!0,onChange:t.onStoryPublishChange}):null],class:"OwnerAvatarEditPublisherStep__checkboxes",tag:"div"},(0,C.default)({inner:[r.save_button_done],class:"OwnerAvatarEditPublisherStep__submitButton",size:"large",use_native_onclick:!0,onClick:t.onSaveClick})],class:"OwnerAvatarEditPublisherStep",tag:"div"}}var I=r(69351),k=r(19331),U=r(89798),L=r(40206);var M,D=r(95001),R=r(79957);function B(t){const e={event_type:t};(0,R.statlogsValueEvent)("upload_photo_analytics",e)}!function(t){t.EVENT_SHARE_TO_STORY_TURN_OFF="share_to_story_turn_off",t.EVENT_SHARE_TO_STORY_TURN_ON="share_to_story_turn_on",t.EVENT_SHARE_TO_FEED_TURN_OFF="share_to_feed_turn_off",t.EVENT_SHARE_TO_FEED_TURN_ON="share_to_feed_turn_on"}(M||(M={}));var F=r(28412);const j=new class{constructor(){this.thumbnailCreatorHandler=t=>{if(this.context.cropperResult=t,this.context.mode===I.OwnerAvatarEditorMods.UPLOAD||this.context.mode===I.OwnerAvatarEditorMods.SELECT)return this.context.manualUpload?(this.onSaveOwnerAvatar?.({data:t}),this.thumbnailCreator?.close()):this.context.publisherStep?.is_enabled?this.openPublisherStep(t):this.saveOwnerAvatar().catch(console.error).then((t=>{const e=t[1];this.onSaveOwnerAvatar?.(),this.showDoneBoxAfterAvatarChange(!0,this.context.publisherStep?.new_avatar_story_data?.shouldCreateNewAvatarStory,e?.ownerId,e?.id)})).finally((()=>{this.thumbnailCreator?.close(),this.closePublisherStep()})),!0;const{crop:e}=t,r=(0,n.getCropString)(e.x,e.y,e.width,e.height,!1);return this.sendCropUpdate(this.context.ownerId,r,this.context.hash||"").then((t=>{t[0]&&window.nav.go(t[0])}))},this.onPostPublishChange=({checked:t}={})=>{this.context.mode===I.OwnerAvatarEditorMods.UPLOAD&&B(t?M.EVENT_SHARE_TO_FEED_TURN_ON:M.EVENT_SHARE_TO_FEED_TURN_OFF)},this.onStoryPublishChange=({checked:t}={})=>{this.context.mode===I.OwnerAvatarEditorMods.UPLOAD&&B(t?M.EVENT_SHARE_TO_STORY_TURN_ON:M.EVENT_SHARE_TO_STORY_TURN_OFF)},this.showDoneBoxAfterAvatarChange=(t=!1,e=!1,r=0,o=0)=>{const n=[],i={tag:"a",className:"link",href:`/story${r}_${o}`,onclick:`NewAvatarStory.openNewAvatarStory(event, ${r}, ${o})`,inner:(0,a.getLang)("mobile_stories_new_avatar_story_success_box_open_story")};t&&e?n.push({inner:(0,a.getLang)("profile_avatar_changed_with_post_and_story_title"),attrs:{style:"margin-bottom: 8px;"}},i):t?r>0?n.push({inner:(0,a.getLang)("profile_avatar_changed_with_post_title")}):n.push({inner:(0,a.getLang)("groups_avatar_changed_with_post_title")}):e?n.push({inner:(0,a.getLang)("profile_avatar_changed_with_story_title"),attrs:{style:"margin-bottom: 8px;"}},i):r>0?n.push({inner:(0,a.getLang)("profile_avatar_changed_title")}):n.push({inner:(0,a.getLang)("groups_avatar_changed_title")});const s={type:v.SNACKBAR_TYPE_SUCCESS,text:{inner:n},duration:5*D.SECOND},l=this.context?.cropperResult?.cropped.base64,h={...s,type:v.SNACKBAR_TYPE_NFT_AVATAR,text:{inner:n},avatar_position:"left",avatar:l};v.init(this.context.isNft?h:s)},this.selectPhoto=(t,e,r="")=>{const o=t?I.OwnerAvatarEditorMods.SELECT:I.OwnerAvatarEditorMods.EDIT;return this.context={ownerId:e,ownerName:r,mode:o,selectedPhotoId:t,manualUpload:!1},this.initUI(r).then((r=>this.fetchUploadConfig({owner_id:e,photo_id:t,mode:o}).then((t=>{this.context.publisherStep=t.publisherStep,this.context.hash=t.hash,this.context.rotate=t.photo.rotate;const{photo:e,rect:n}=t;if(r.setSuccessHandler(this.thumbnailCreatorHandler),o===I.OwnerAvatarEditorMods.EDIT)return c(e.src,n[0],n[1],n[2],n[3]).then((t=>{r.getFromPhoto(t.src)}));{const t=e.rotate%4*90;return function(t,e=0){return("string"==typeof t?(0,s.loadImage)(t):Promise.resolve(t)).then((t=>{let{naturalWidth:r,naturalHeight:o}=t;return 90!==e&&270!==e||([r,o]=[o,r]),c(t,0,0,r,o,e)}))}(e.src,t).then((t=>{r.getFromPhoto(t.src)}))}})).catch((t=>{throw t})))).catch((t=>{console.error(t),v.init({text:(0,a.getLang)("mobile_unknown_error"),type:v.SNACKBAR_TYPE_ERROR})})),!1}}setContext(t){this.context={...this.context||{},...t}}initUI(t=""){return(0,o.loadThumbnailCreator)().then((e=>(this.thumbnailCreator=new e({minSourceWidth:400,minSourceHeight:400,minCroppedHeight:400,minCroppedWidth:400,maxSourceWidth:8192,maxSourceHeight:8192,maxCroppedHeight:8192,maxCroppedWidth:8192,previewBlock:(0,k.partConfigEnabled)("mvk_owner_new_avatar_preview_block")&&A({ownerName:t}),cropperOptions:{preview:".OwnerAvatarEditPreviewThumbnail__preview"},isNft:this.context.isNft}),this.thumbnailCreator.initPopup(),this.thumbnailCreator)))}setNftAvatar(t){const{nft:e,oid:r}=t;this.context={mode:I.OwnerAvatarEditorMods.UPLOAD,ownerId:r,nftPayload:t,manualUpload:!1,isNft:!0};const o=(0,F.getPhotoSize)(e.photo.sizes,1/0);if(!o)return;this.context.src=o.url;this.initUI(this.context.ownerName).then((t=>this.fetchUploadConfig({owner_id:this.context.ownerId,mode:I.OwnerAvatarEditorMods.UPLOAD}).then((e=>{this.context.publisherStep=e.publisherStep,t.setSuccessHandler(this.thumbnailCreatorHandler),o&&t.getFromPhoto(o.url),(t=>{const e=document.querySelector(`.${t}`);e&&e.style.setProperty("--nft-preview",(()=>{const t=document.querySelector(".NftAvatar__asset");return t?`url(${t.getAttribute("data-nft-outline")})`:"none"})())})("ThumbnailCreatorContent__preview--cropBoxHeptagon")}))))}onUploadInputChange(t,e){this.context={ownerId:Number(t.dataset.ownerId),ownerName:String(t.dataset.ownerName),mode:I.OwnerAvatarEditorMods.UPLOAD,manualUpload:!1},this.onSaveOwnerAvatar=e?.onSaveOwnerAvatar;const r=t?.files?.[0];this.handleFile(r)}handleFile(t){this.prepareUpload().then((()=>{if(!t)throw new Error;return this.preparePhoto(t).then((()=>{this.startCrop(t)}))})).catch((t=>{console.error(t),v.init({text:"UploadError"===t.name?t.message:(0,a.getLang)("mobile_unknown_error"),type:v.SNACKBAR_TYPE_ERROR})}))}prepareUpload(){return this.initUI(this.context.ownerName).then((()=>this.fetchUploadConfig({owner_id:this.context.ownerId,mode:I.OwnerAvatarEditorMods.UPLOAD}).then((t=>{this.context.uploader=new b.UploadPhoto(t.uploadConfig),this.context.publisherStep=t.publisherStep})).catch((t=>{throw this.thumbnailCreator?.close(),t}))))}preparePhoto(t){return this.context.uploader?this.context.uploader.validate(t).then((()=>this.context.manualUpload?Promise.resolve():this.context.uploader?.upload(t).then((t=>this.getPhotoSrcFromRawObject(this.context.ownerId,JSON.stringify(t)).then((e=>{this.context.photo=t,this.context.src=e})))))).catch((t=>{if(this.thumbnailCreator?.close(),t.text){const e=new Error(t.text);throw e.name="UploadError",e}})):Promise.reject()}startCrop(t){if(!this.thumbnailCreator)throw new Error;if(this.thumbnailCreator.setSuccessHandler(this.thumbnailCreatorHandler),this.context.manualUpload&&t)this.thumbnailCreator.getFromFile(t);else if(this.context.isNft&&this.context?.src)this.thumbnailCreator.getFromPhoto(this.context.src);else{if(!this.context.src)throw new Error;this.thumbnailCreator.getFromPhoto(this.context.src)}}saveOwnerAvatar(t=!0,e=!0){const{crop:r,cropped:o}=this.context.cropperResult,a=this.context.publisherStep?.new_avatar_story_data;let i=Promise.resolve(void 0);const s=e&&a?.shouldCreateNewAvatarStory;let l;if(s&&(i=f.initNewAvatarStory(a,this.context.ownerId,o.base64)),this.context.isNft&&this.context.nftPayload){const e=(0,n.getCropString)(r.x,r.y,r.width,r.height,!0);l=function(t,e,r=0,o=!1){const{nft_public_id:n,network_type:a,wallet_public_id:i}=t;return(0,U.api)("nft.setAvatar",{wallet_public_id:i,nft_public_id:n,network_type:a,square_crop:e,full_crop:(t=>{const e=t.split(",");return e.push(e[e.length-1]),e.join(",")})(e),skip_post:r.toString()}).then((({success:t})=>((0,L.sendMessage)({type:"VKWebAppSetNFTAvatarResult",data:{result:t,is_posted_to_story:o}},window.cur.app.cont),t||Promise.reject("NFT: Cannot send nft avatar set, success false"))))}(this.context.nftPayload,e,t?0:1,s)}else{const e=(0,n.getCropString)(r.x,r.y,r.width,r.height,!1);l=this.context.mode===I.OwnerAvatarEditorMods.UPLOAD?this.sendPhotoAvatarSave(this.context.ownerId,JSON.stringify(this.context.photo),e,t?0:1):this.sendPhotoAvatarSelect(this.context.ownerId,this.context.selectedPhotoId||"",e,this.context.rotate||0,this.context.hash||"",t?0:1)}return Promise.all([l,i.then((t=>!(t?.response&&t.response.upload_result&&a)||f.saveNewAvatarStory(a,t.response.upload_result)))]).then((t=>(t[0]&&window.nav.go(t[0][0]),t)))}openPublisherStep(t){if(this.publisherStepPopup)return;const e=(0,P.default)({title:this.context.publisherStep?.title,isLeftActionBack:!0,onLeftActionClick:"OwnerPhotoUpload2.closePublisherStep();",content:y({avatarSrc:t.cropped.base64,config:this.context.publisherStep,onSaveClick:"OwnerPhotoUpload2.onPublisherStepDone()",onPostPublishChange:"OwnerPhotoUpload2.onPostPublishChange",onStoryPublishChange:"OwnerPhotoUpload2.onStoryPublishChange",isNft:this.context.isNft}),isNft:this.context.isNft}),r=E.default.elem(e);this.publisherStepPopup=O.default.open(r,!0)}onPublisherStepDone(){const t=this.publisherStepPopup.querySelector('input[name="OwnerAvatarEditPublisherStepPublishPost"]').checked,e=this.publisherStepPopup.querySelector('input[name="OwnerAvatarEditPublisherStepPublishStory"]')?.checked;C.default.setDisabled(this.publisherStepPopup.querySelector(".ModalPage__headerButton--close"),!0),C.default.setLoading(this.publisherStepPopup.querySelector(".OwnerAvatarEditPublisherStep__submitButton"),!0),this.saveOwnerAvatar(t,e).catch(console.error).then((r=>{let o=0;r&&(o=r[1]?.id),this.onSaveOwnerAvatar?.({isPublishStory:e}),this.showDoneBoxAfterAvatarChange(t,e,this.context.ownerId,o)})).finally((()=>{this.thumbnailCreator?.close(),this.closePublisherStep()}))}closePublisherStep(){this.thumbnailCreator?.unlockControlButtons(),O.default.close(this.publisherStepPopup),delete this.publisherStepPopup}fetchUploadConfig(t){return window.ajax.post("/profile.php",{act:"upload_owner_photo",oid:t.owner_id,mode:t.mode,photo_id:t.photo_id}).promise.then((t=>{if(!t.json)throw new Error;return t.json.data[0]}))}getPhotoSrcFromRawObject(t,e){return window.ajax.post("/profile.php",{act:"get_image_src",photo:e,oid:t}).promise.then((t=>{if(!t.json||!t.json.data)throw new Error;if(null===t.json.data[0]){const e=new Error(t.json.data[1]);throw e.name="UploadError",e}return t.json.data[0]}))}sendCropUpdate(t,e,r){return window.ajax.post("/profile.php",{act:"update_avatar_crop",square_crop:e,oid:t,hash:r}).promise.then((t=>{if(!t.json)throw new Error;return t.json.data}))}sendPhotoAvatarSelect(t,e,r,o,n,a=0){return window.ajax.post("/profile.php",{act:"select_avatar",rect_crop:r,rotate:o,photo_raw:e,oid:t,hash:n,skip_post:a}).promise.then((t=>{if(!t.json)throw new Error;return t.json.data}))}sendPhotoAvatarSave(t,e,r,o=0){return window.ajax.post("/profile.php",{act:"save_avatar",rect_crop:r,photo:e,oid:t,skip_post:o}).promise.then((t=>{if(!t.json)throw new Error;return t.json.data}))}};window.OwnerPhotoUpload2=j},57649:function(t,e,r){"use strict";r.d(e,{loadThumbnailCreator:function(){return n}});var o=r(79957);function n(){return Promise.all([r.e(3437),r.e(1070)]).then(r.bind(r,93285)).then((t=>t.ThumbnailCreator),(t=>{throw(0,o.statlogsValueEvent)("mvk_thumbnail_creator_event",null,"chunk_error",t.name),t}))}},72455:function(t,e,r){"use strict";r.d(e,{getMaxPhotoSize:function(){return o},getCropString:function(){return n}});r(89798);function o(t){if(!Array.isArray(t)||!t.length)return null;const e=t.reduce(((t,e)=>(t[e.type]=e,t)),{}),r=e.z||e.y||e.h||e.n||e.j||e.x||e.m||e.s;return r?{url:r.url||r.src,width:r.width,height:r.height}:null}function n(t,e,r,o,n=!1){let a=`${t},${e},${r}`;return n||(a=`${a},${o}`),a}},11639:function(t,e,r){"use strict";r.d(e,{UploadPhoto:function(){return a}});var o=r(69351);function n(t){return e=URL.createObjectURL(t),new Promise((function(t,r){const o=new Image;o.onload=function(){const e=Number(o.height),r=Number(o.width);t([r,e])},o.onerror=function(){r()},o.onabort=function(){r()},o.src=e}));var e}class a{constructor(t,e){this.config={allowedTypes:["*"],...t},this.progressCallback=e}validate(t){const{constraints:e,allowedTypes:r,lang:a}=this.config;let i=!1;return r&&(i=r.some((function(e){return"*"===e||e===t.type}))),i?e?n(t).then((function(t){const{maxWidth:r,minWidth:n,maxHeight:i,minHeight:s,maxAspectRatio:l,minAspectRatio:h}=e,[c,d]=t,u=c/d;if(c>r||d>i){const t=(a[`error_${o.UploadPhotoErrorCodes.IMAGE_TOO_BIG}`]||"").replace("{width}",String(r)).replace("{height}",String(i));return Promise.reject({code:o.UploadPhotoErrorCodes.IMAGE_TOO_BIG,text:t})}if(c<n||d<s){const t=(a[`error_${o.UploadPhotoErrorCodes.IMAGE_TOO_SMALL}`]||"").replace("{width}",String(n)).replace("{height}",String(s));return Promise.reject({code:o.UploadPhotoErrorCodes.IMAGE_TOO_SMALL,text:t})}return h&&h>u||l&&u>l?Promise.reject({code:o.UploadPhotoErrorCodes.BAD_ASPECT_RATIO,text:a[`error_${o.UploadPhotoErrorCodes.BAD_ASPECT_RATIO}`]}):Promise.resolve(null)})).catch((function(t){return t&&t.text&&t.code?Promise.reject(t):Promise.reject({code:o.UploadPhotoErrorCodes.UNKNOWN,text:a[`error_${o.UploadPhotoErrorCodes.UNKNOWN}`]})})):Promise.resolve(null):Promise.reject({code:o.UploadPhotoErrorCodes.NOT_ALLOWED_EXTENSION,text:a[`error_${o.UploadPhotoErrorCodes.NOT_ALLOWED_EXTENSION}`]})}upload(t,e,r="file1"){return this.validate(t).then((()=>new Promise(((n,a)=>{const i=new XMLHttpRequest,s=new FormData;s.append(r,t),i.open("POST",e||this.config.url,!0),i.onreadystatechange=()=>{if(i.readyState===XMLHttpRequest.DONE&&200===i.status){let t;try{i.responseText&&(t=JSON.parse(i.responseText))}catch(t){a({code:o.UploadPhotoErrorCodes.UNKNOWN,text:this.config.lang[`error_${o.UploadPhotoErrorCodes.UNKNOWN}`]})}n(t)}},i.onerror=()=>{a({code:o.UploadPhotoErrorCodes.UPLOAD,text:this.config.lang[`error_${o.UploadPhotoErrorCodes.UPLOAD}`]})},i.upload.onprogress=t=>{this.progressCallback&&this.progressCallback(t.loaded,t.total)},i.send(s)}))))}}},69351:function(t,e,r){"use strict";var o,n,a;r.d(e,{UploadPhotoErrorCodes:function(){return o},OwnerAvatarEditorMods:function(){return a}}),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.UPLOAD=1]="UPLOAD",t[t.NOT_ALLOWED_EXTENSION=2]="NOT_ALLOWED_EXTENSION",t[t.IMAGE_TOO_SMALL=3]="IMAGE_TOO_SMALL",t[t.IMAGE_TOO_BIG=4]="IMAGE_TOO_BIG",t[t.BAD_ASPECT_RATIO=5]="BAD_ASPECT_RATIO"}(o||(o={})),function(t){t.UPLOADED="uploaded",t.EXISTED="existed"}(n||(n={})),function(t){t[t.UPLOAD=1]="UPLOAD",t[t.SELECT=2]="SELECT",t[t.EDIT=3]="EDIT",t[t.NFT=4]="NFT"}(a||(a={}))}},function(t){"use strict";t.O(0,[1216,911,9522,4952,8,6320,2450,9873,5411,220,8156,7342,8040,3380,91,5333,8331,8592],(function(){return e=46545,t(t.s=e);var e}));t.O()}]);