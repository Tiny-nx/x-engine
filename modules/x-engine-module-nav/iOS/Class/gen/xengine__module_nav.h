
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import <xengine__module_BaseModule.h>
#import "JSONModel.h"

@protocol NavTitleDTO;
@protocol NavPopItem;
@protocol NavBtnDTO;
@protocol NavMoreBtnDTO;
@protocol NavNavigatorDTO;
@protocol NavOpenAppDTO;
@protocol NavSearchBarDTO;

@interface NavTitleDTO: JSONModel
  	@property(nonatomic,copy) NSString* title;
   	@property(nonatomic,copy) NSString* titleColor;
   	@property(nonatomic,assign) NSInteger titleSize;
@end
    

@interface NavPopItem: JSONModel
  	@property(nonatomic,copy) NSString* icon;
   	@property(nonatomic,copy) NSString* iconSize;
   	@property(nonatomic,copy) NSString* title;
   	@property(nonatomic,copy) NSString* __event__;
@end
    

@interface NavBtnDTO: JSONModel
  	@property(nonatomic,copy) NSString* title;
   	@property(nonatomic,copy) NSString* titleColor;
   	@property(nonatomic,assign) NSInteger titleSize;
   	@property(nonatomic,copy) NSString* titleBig;
   	@property(nonatomic,copy) NSString* titleFontName;
   	@property(nonatomic,assign) BOOL isBoldFont;
   	@property(nonatomic,copy) NSString* icon;
   	@property(nonatomic,strong) NSArray<NSNumber*>* iconSize;
   	@property(nonatomic,strong) NSArray<NSDictionary<NSString*,NSString*>*>* popList;
   	@property(nonatomic,copy) NSString* showMenuImg;
   	@property(nonatomic,copy) NSString* popWidth;
   	@property(nonatomic,copy) NSString* __event__;
@end
    

@interface NavMoreBtnDTO: JSONModel
  	@property(nonatomic,strong) NSArray<NavBtnDTO>* btns;
@end
    

@interface NavNavigatorDTO: JSONModel
  	@property(nonatomic,copy) NSString* url;
   	@property(nonatomic,copy) NSString* params;
@end
    

@interface NavOpenAppDTO: JSONModel
  	@property(nonatomic,copy) NSString* type;
   	@property(nonatomic,copy) NSString* uri;
   	@property(nonatomic,copy) NSString* path;
@end
    

@interface NavSearchBarDTO: JSONModel
  	@property(nonatomic,assign) NSInteger cornerRadius;
   	@property(nonatomic,copy) NSString* backgroundColor;
   	@property(nonatomic,copy) NSString* iconSearch;
   	@property(nonatomic,strong) NSArray<NSNumber*>* iconSearchSize;
   	@property(nonatomic,copy) NSString* iconClear;
   	@property(nonatomic,strong) NSArray<NSNumber*>* iconClearSize;
   	@property(nonatomic,copy) NSString* textColor;
   	@property(nonatomic,assign) NSInteger fontSize;
   	@property(nonatomic,copy) NSString* placeHolder;
   	@property(nonatomic,assign) NSInteger placeHolderFontSize;
   	@property(nonatomic,assign) BOOL isInput;
   	@property(nonatomic,assign) BOOL becomeFirstResponder;
   	@property(nonatomic,copy) NSString* __event__;
@end
    


@protocol xengine__module_nav_protocol
       @required 
        - (void) _setNavTitle:(NavTitleDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _setNavLeftBtn:(NavBtnDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _setNavRightBtn:(NavBtnDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _setNavRightMenuBtn:(NavBtnDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _setNavRightMoreBtn:(NavMoreBtnDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _navigatorPush:(NavNavigatorDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _navigatorBack:(NavNavigatorDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _navigatorRouter:(NavOpenAppDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _setNavSearchBar:(NavSearchBarDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
@end
  


@interface xengine__module_nav : xengine__module_BaseModule<xengine__module_nav_protocol>
@end

