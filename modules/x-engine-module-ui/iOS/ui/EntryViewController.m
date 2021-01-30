//
//  EntryViewController.m
//  ui
//
//  Created by edz on 2020/7/22.
//  Copyright © 2020 edz. All rights reserved.
//

#import "EntryViewController.h"
#import <XEngineContext.h>
#import <MircroAppController.h>
#import <UIViewController+.h>
@interface EntryViewController ()

@end

@implementation EntryViewController
- (IBAction)Action:(id)sender {
    [self goto2];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    [self goto2];
}

- (void)goto2 {
    MircroAppController *webLaderVC = [[MircroAppController alloc] initWithUrl:@"http://0.0.0.0:9111/index.html"  ];
    [self pushViewController:webLaderVC];
}
@end
