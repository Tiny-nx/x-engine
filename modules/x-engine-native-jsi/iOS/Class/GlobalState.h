//
//  GlobalState.h
//  ModuleApp
//
//  Created by zk on 2021/3/27.
//  Copyright © 2021 zkty-team. All rights reserved.
//
/// TODO: 这个类不应该这样存在，污染全局
#import <Foundation/Foundation.h>
#import "HistoryModel.h"
#import "XEngineWebView.h"

NS_ASSUME_NONNULL_BEGIN

@interface GlobalState : NSObject
+ (instancetype)sharedInstance;

+ (void)setCurrentWebView:(XEngineWebView*) val;
+ (XEngineWebView*)getCurrentWebView;

+ (void)setBackApiCalled:(int) val;
+ (int)getBackApiCalled;

- (NSString*) getLastHost;
- (NSMutableArray<HistoryModel *> *)getCurrentWebViewHistories;
- (void)addCurrentWebViewHistory:(HistoryModel *) history;
- (void)deleteWebView:(XEngineWebView *) webview;

@end
NS_ASSUME_NONNULL_END
