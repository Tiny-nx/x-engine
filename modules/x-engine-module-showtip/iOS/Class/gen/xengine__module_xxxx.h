
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import <xengine__module_BaseModule.h>
#import "JSONModel.h"

@protocol SheetDTO;
@protocol ContinousDTO;
@protocol MsgPayloadDTO;
@protocol _0_com_zkty_module_xxxx_DTO;
@protocol _1_com_zkty_module_xxxx_DTO;
@protocol _2_com_zkty_module_xxxx_DTO;
@protocol _3_com_zkty_module_xxxx_DTO;

@interface SheetDTO: JSONModel
  	@property(nonatomic,copy) NSString* title;
   	@property(nonatomic,strong) NSArray<NSString*>* itemList;
   	@property(nonatomic,copy) NSString* content;
   	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface ContinousDTO: JSONModel
  	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface MsgPayloadDTO: JSONModel
  	@property(nonatomic,copy) NSString* type;
   	@property(nonatomic,strong) NSDictionary<NSString*,NSString*>* args;
   	@property(nonatomic,copy) NSString* sender;
   	@property(nonatomic,strong) NSArray<NSString*>* receiver;
   	@property(nonatomic,strong) NSString* __event__;
   	@property(nonatomic,strong) NSString* __ret__;
@end
    

@interface _0_com_zkty_module_xxxx_DTO: JSONModel
  	@property(nonatomic,assign) NSInteger age;
   	@property(nonatomic,copy) NSString* name;
   	@property(nonatomic,strong) NSArray<NSString*>* books;
   	@property(nonatomic,strong) _1_com_zkty_module_xxxx_DTO* complexArg;
@end
    

@interface _1_com_zkty_module_xxxx_DTO: JSONModel
  	@property(nonatomic,assign) NSInteger a;
   	@property(nonatomic,copy) NSString* name;
@end
    

@interface _2_com_zkty_module_xxxx_DTO: JSONModel
  	@property(nonatomic,assign) NSInteger age;
   	@property(nonatomic,copy) NSString* name;
   	@property(nonatomic,strong) NSArray<NSString*>* books;
   	@property(nonatomic,strong) _3_com_zkty_module_xxxx_DTO* complexArg;
@end
    

@interface _3_com_zkty_module_xxxx_DTO: JSONModel
  	@property(nonatomic,assign) NSInteger a;
   	@property(nonatomic,copy) NSString* name;
@end
    


@protocol xengine__module_xxxx_protocol
       @required 
       - (void) _broadcastOn:(void (^)(BOOL complete)) completionHandler;
    
      @required 
       - (void) _broadcastOff:(void (^)(BOOL complete)) completionHandler;
    
      @required 
       - (void) _triggerNativeBroadCast:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _repeatReturn__event__:(ContinousDTO*) dto complete:(void (^)(NSString* result,BOOL complete)) completionHandler;

      @required 
        - (void) _repeatReturn__ret__:(ContinousDTO*) dto complete:(void (^)(NSString* result,BOOL complete)) completionHandler;

      @required 
        - (void) _ReturnInPromiseThen:(ContinousDTO*) dto complete:(void (^)(NSString* result,BOOL complete)) completionHandler;

      @required 
       - (void) _noArgNoRet:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _noArgRetPrimitive:(void (^)(NSString* result,BOOL complete)) completionHandler;
    
      @required 
        - (void) _noArgRetSheetDTO:(void (^)(SheetDTO* result,BOOL complete)) completionHandler;
    
      @required 
        - (void) _haveArgNoRet:(SheetDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _haveArgRetPrimitive:(SheetDTO*) dto complete:(void (^)(NSString* result,BOOL complete)) completionHandler;

      @required 
        - (void) _haveArgRetSheetDTO:(SheetDTO*) dto complete:(void (^)(SheetDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _anonymousType:(_2_com_zkty_module_xxxx_DTO*) dto complete:(void (^)(_0_com_zkty_module_xxxx_DTO* result,BOOL complete)) completionHandler;

@end
  


@interface xengine__module_xxxx : xengine__module_BaseModule<xengine__module_xxxx_protocol>
@end

