
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol OpenShareUiDTO;
@protocol ChannelDTO;
@protocol ChannelStatusDTO;
@protocol PosterDTO;
@class OpenShareUiDTO;
@class ChannelDTO;
@class ChannelStatusDTO;
@class PosterDTO;

@interface OpenShareUiDTO: JSONModel
  	@property(nonatomic,copy) NSString* shopWechatGroupImgUrl;
   	@property(nonatomic,strong) NSArray<ChannelDTO>* channelList;
@end
    

@interface ChannelDTO: JSONModel
  	@property(nonatomic,copy) NSString* channel;
   	@property(nonatomic,copy) NSString* shareType;
@end
    

@interface ChannelStatusDTO: JSONModel
  	@property(nonatomic,copy) NSString* channel;
   	@property(nonatomic,copy) NSString* shareType;
   	@property(nonatomic,copy) NSString* shareImgData;
@end
    

@interface PosterDTO: JSONModel
  	@property(nonatomic,copy) NSString* posterType;
   	@property(nonatomic,copy) NSString* posterImgUrl;
   	@property(nonatomic,copy) NSString* shopLogoUrl;
   	@property(nonatomic,copy) NSString* shopName;
   	@property(nonatomic,copy) NSString* shopAddress;
   	@property(nonatomic,copy) NSString* rightCornerImg;
   	@property(nonatomic,copy) NSString* minProgramImg;
   	@property(nonatomic,copy) NSString* goodsTitle;
   	@property(nonatomic,copy) NSString* goodsPrice;
   	@property(nonatomic,copy) NSString* activityName;
@end
    


@protocol xengine_jsi_gmshare_protocol
       @required 
        - (void) _openShareUi:(OpenShareUiDTO*) dto complete:(void (^)(ChannelStatusDTO* result,BOOL complete)) completionHandler;

      @required 
       - (void) _createPoster:(PosterDTO*)dto;
    
@end
  


@interface xengine_jsi_gmshare : JSIModule<xengine_jsi_gmshare_protocol>
@end
