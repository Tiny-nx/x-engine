//
//  WebViewPool.h
//  x-engine-module-engine
//


#import <UIKit/UIKit.h>
#import "XEngineWebView.h"



@interface WebViewFactory: NSObject
    @property (nonatomic, weak) NSMutableArray<XEngineWebView*>* webviews;
    + (instancetype)sharedInstance;
    -(XEngineWebView *)createWebView;

@end




