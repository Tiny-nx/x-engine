
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol ScanOpenDto;

@interface ScanOpenDto: JSONModel
  	@property(nonatomic,strong) NSString* __event__;
@end
    


@protocol xengine_jsi_scan_protocol
       @required 
        - (void) _openScanView:(ScanOpenDto*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
@end
  


@interface xengine_jsi_scan : JSIModule<xengine_jsi_scan_protocol>
@end

