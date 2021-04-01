//
//  XEngineInternalApis.m
//  XEngineSDK

#import "XEngineInternalApis.h"
#import "XEngineJSBUtil.h"
@implementation XEngineInternalApis
- (id) hasNativeMethod:(id) args
{
    return [self.webview onMessage:args type: XEngine_DSB_API_HASNATIVEMETHOD];
}

- (id) closePage:(id) args{
    return [self.webview onMessage:args type:XEngine_DSB_API_CLOSEPAGE];
}

- (id) returnValue:(NSDictionary *) args{
    return [self.webview onMessage:args type:XEngine_DSB_API_RETURNVALUE];
}

- (id) dsinit:(id) args{
    return [self.webview onMessage:args type:XEngine_DSB_API_DSINIT];
}

- (id) disableJavascriptDialogBlock:(id) args{
    return [self.webview onMessage:args type:XEngine_DSB_API_DISABLESAFETYALERTBOX];
}
@end
