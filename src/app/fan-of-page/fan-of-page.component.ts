import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var window:any;
declare var FB:any;
      
      
//

    
@Component({
  selector: 'app-fan-of-page',
  templateUrl: './fan-of-page.component.html',
  styleUrls: ['./fan-of-page.component.css']
})
export class FanOfPageComponent implements OnInit {
 
  FB:any;
 
  AppId;
  myPageName;
  @Input() info:string[];
  @Output() output = new EventEmitter<string>(); 
  ngOnInit(){
   this.initFacebook();
 }
 constructor(private http: HttpClient) {
    
 }
 
 initFacebook=()=>{
  this.AppId=this.info[0];
  this.myPageName=this.info[1];
      let self:any=this;
            
     
   window.fbAsyncInit = ()=> {
     FB.init({
       appId            : this.info[0],
       autoLogAppEvents : true,
       xfbml            : true,
       version          : 'v2.12',
       oauth  : true
     });
 
          FB.getLoginStatus((response)=> {
             if (response.status === 'connected') {
             //  uncomment it for user permission.......
              //  FB.login(
              //    function(respo) {
              //     this.response=respo;
              //    },
              //    {
              //      scope: 'user_likes',
              //      auth_type: 'rerequest'
              //    }
              //  );
            //   console.log(response);
               this.showConfig(response.authResponse.accessToken); 
             }
             else {
               FB.login(function(response){
                 if (response.status === 'connected') {
                  this.showConfig(response.authResponse.accessToken); 
                   
                 }else{
                  this.output.emit("Login to continue"); 
                 }
               });
             }
 
           },{scope: 'user_likes',
           return_scopes: true});
          
   };
 
   (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
 
 
   }




/////////////////////////////////////////////////



configUrl:string="";
myUrl:string="https://graph.facebook.com/v2.12/me?fields=likes.limit(1000)&access_token=";
flag=false;
obj:any;
      getConfig() {
       // console.log("log check","i am in get config")
        return this.http.get(this.configUrl)
    
      }
      showConfig(access_Token) {
          let self=this;
          this.configUrl=this.myUrl+access_Token;

          this.getConfig()
            .subscribe(res =>{
              let response=JSON.parse(JSON.stringify(res));
           // console.log("my response",response);
              let i=response.likes.data;
              let j=0;
              let f=false;
              if(i.length===0){
                console.log("user does not likes your page"+this.myPageName);
                f=false;
                this.output.emit("user does not likes your page"); 
              }else{
                  while(j<i.length){
                    // console.log("myPage name is:",this.myPageName);
                      if(i[j].name=== this.myPageName)
                      {
                      console.log("myPage name is:",this.myPageName);
                      this.output.emit("user likes your page"); 
                      f=true;
                      break;  
                      }
                      j++;
                  }

                
          if(!f){
                  //if page not found call for another 100 page-likes
                  this.nextShowConfig(response.likes.paging.next);
            }
          }
         
            });
  }


nextShowConfig(uri){
  //console.log("before",this.configUrl);
  let self=this;
  this.configUrl=uri;
  this.getConfig()
    .subscribe(res =>
        {

         let response=JSON.parse(JSON.stringify(res));
         let i=response.data;
         let f=false;
          let j=0;
          if(i.length===0){
          //console.log("he does not likes your page"+this.myPageName);
          this.output.emit("he does not likes your page"); 
          f=false;
          }else{
          while(j<i.length){
              if(i[j].name=== this.myPageName)
              {
              this.output.emit("user likes your page"); 
              f=true;
              break;
              }
              j++;
          }

          if(!f){
            //if page not found call for another 100 page-likes
            this.nextShowConfig(response.paging.next);
          }

        }
      }
    );




  //console.log("After",this.configUrl);

}

}



  