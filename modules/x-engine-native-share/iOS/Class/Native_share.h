//
//  Native_share.h
//  share
//
//  Copyright © 2020 @zkty-team. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NativeModule.h"
#import "iShareManager.h"
#import "JSONModel.h"

NS_ASSUME_NONNULL_BEGIN
@interface ContentModel : JSONModel

@property (nonatomic, copy)NSString *imgUrl;
@property (nonatomic, assign)NSData *imgData;
@property (nonatomic, copy)NSString *title;
@property (nonatomic, copy)NSString *text;
@property (nonatomic, copy)NSString *desc;
@property (nonatomic, copy)NSString *url;
@property (nonatomic, copy)NSString *link;
@property (nonatomic, copy)NSString *path;
@property (nonatomic, assign)int minProgramType;
@property (nonatomic, copy)NSString *userName;
@end

@interface ShareInfoModel : JSONModel
@property (nonatomic, copy)NSString *channel;
@property (nonatomic, copy)NSString *shareType;
@property (nonatomic, strong)ContentModel *contentInfo;

@end


@interface Native_share : NativeModule <iShareManager>

@end

///NEW
@interface ChannelDTONav : JSONModel
//分享渠道标签  wx_friend (微信好友) wx_zone（朋友圈）gome（国美） create_poster(生成海报) save_img(保存图片)
@property (nonatomic, copy)NSString *channel;
//分享类型 text (文字) img (图片) link (链接) miniProgram (微信小程序)
@property (nonatomic, copy)NSString *shareType;

@end

@interface OpenShareUiDTONav : JSONModel

@property (nonatomic,  copy)NSString *shopWechatGroupImgUrl;
//展示的分享渠道
@property (nonatomic,strong)NSArray<ChannelDTONav *> *channelList;

@end

@interface ChannelStatusDTONav : JSONModel
//分享渠道标签  wx_friend (微信好友) wx_zone（朋友圈）gome（国美） create_poster(生成海报) save_img(保存图片)
@property (nonatomic, copy)NSString *channel;
  //分享类型 text (文字) img (图片) link (链接) miniProgram (微信小程序)
@property (nonatomic, copy)NSString *shareType;
  //分享图片的base64
@property (nonatomic, copy)NSString *shareImgData;

@end
//海报信息
@interface PosterDTONav : JSONModel
//海报类型  goods(商品) shop(店铺) activity(活动)
@property (nonatomic, copy)NSString *posterType;
  //海报图片
@property (nonatomic, copy)NSString *posterImgUrl;
  //店铺logo url地址
@property (nonatomic, copy)NSString *shopLogoUrl;
  //店铺名称
@property (nonatomic, copy)NSString *shopName;
  //店铺地址 （店铺海报必传）
@property (nonatomic, copy)NSString *shopAddress;
  //右下角二维码图片
@property (nonatomic, copy)NSString *rightCornerImg;
  //小程序二维码图片
@property (nonatomic, copy)NSString *minProgramImg;
  //商品的名称（商品海报必传）
@property (nonatomic, copy)NSString *goodsTitle;
  //商品的价格（商品海报必传）
@property (nonatomic, copy)NSString *goodsPrice;
  //活动名称（活动海报必传）
@property (nonatomic, copy)NSString *activityName;

@end



NS_ASSUME_NONNULL_END
