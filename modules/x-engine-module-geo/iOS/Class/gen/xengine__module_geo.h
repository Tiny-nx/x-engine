
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import <xengine__module_BaseModule.h>
#import "JSONModel.h"

@protocol GeoReqDTO;
@protocol GeoResDTO;
@protocol GeoReverseReqDTO;
@protocol GeoReverseResDTO;

@interface GeoReqDTO: JSONModel
  	@property(nonatomic,copy) NSString* type;
@end
    

@interface GeoResDTO: JSONModel
  	@property(nonatomic,copy) NSString* longitude;
   	@property(nonatomic,copy) NSString* latitude;
@end
    

@interface GeoReverseReqDTO: JSONModel
  	@property(nonatomic,copy) NSString* type;
   	@property(nonatomic,copy) NSString* longitude;
   	@property(nonatomic,copy) NSString* latitude;
@end
    

@interface GeoReverseResDTO: JSONModel
  	@property(nonatomic,copy) NSString* longitude;
   	@property(nonatomic,copy) NSString* latitude;
@end
    


@protocol xengine__module_geo_protocol
       @required 
        - (void) _coordinate:(GeoReqDTO*) dto complete:(void (^)(GeoResDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _locate:(GeoReverseReqDTO*) dto complete:(void (^)(GeoReverseResDTO* result,BOOL complete)) completionHandler;

@end
  


@interface xengine__module_geo : xengine__module_BaseModule<xengine__module_geo_protocol>
@end
