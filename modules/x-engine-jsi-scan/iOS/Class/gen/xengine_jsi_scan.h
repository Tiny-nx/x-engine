
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"






@protocol xengine_jsi_scan_protocol
       @required 
        - (void) _openScanView:(void (^)(NSString* result,BOOL complete)) completionHandler;
    
@end
  


@interface xengine_jsi_scan : JSIModule<xengine_jsi_scan_protocol>
@end
