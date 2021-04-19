
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol GeoEventDTO;
@protocol GeoLocationResDTO;

@interface GeoEventDTO: JSONModel
  	@property(nonatomic,copy) NSString* type;
   	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface GeoLocationResDTO: JSONModel
  	@property(nonatomic,copy) NSString* longitude;
   	@property(nonatomic,copy) NSString* latitude;
   	@property(nonatomic,copy) NSString* country;
   	@property(nonatomic,copy) NSString* province;
   	@property(nonatomic,copy) NSString* city;
   	@property(nonatomic,copy) NSString* district;
   	@property(nonatomic,copy) NSString* town;
   	@property(nonatomic,copy) NSString* street;
@end
    


@protocol xengine_jsi_geo_protocol
       @required 
        - (void) _locate:(GeoEventDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
@end
  


@interface xengine_jsi_geo : JSIModule<xengine_jsi_geo_protocol>
@end
