export class Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = Math.random() * 0.5 + 0.25;
    this.speed = Math.random() * 0.25 + 0.125;
  }

  // Initialize snowflake position and size
  init() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight * 1.2;
  }

  // Update snowflake position
  update() {
    this.y += this.speed;
    if (this.y > window.innerHeight * 1.2) {
      this.init();
    }
  }

  // Draw snowflake on canvas
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

interface MyObjectElement {
  [key: string]: Object;
}

interface MyObject2 {
  [key: string]: MyObjectElement;
}

export const golden_kamuy: MyObject2 = {
  s_1: {
    _1: "https://r300201.kujo-jotaro.com/golden-kamuy/1/1.1080.4b84ce258ab963c5.mp4?hash1=a6c194434e5a16d6889aa3d000861d16&hash2=c1b698f31bd0f8742a850a52a22f3c07",
    _2: "https://r300201.kujo-jotaro.com/golden-kamuy/1/2.1080.35723bd0a99f279e.mp4?hash1=c8b90578fdccb238c99fb562bd9118d2&hash2=899f729301d497578b5e378d6cbdf4db",
    _3: "https://r300201.kujo-jotaro.com/golden-kamuy/1/3.1080.efb2aa5ad8c368b2.mp4?hash1=4c5c2d9afd01b7caef22805dbcc4e6f2&hash2=b807b4d1f8f6ea11832e8f5cd5873542",
    _4: "https://r300201.kujo-jotaro.com/golden-kamuy/1/4.1080.bc027e1951b80630.mp4?hash1=3df351955730244d4d6448efc06463ec&hash2=4c6b486fbffaf5af57216f4000922072",
    _5: "https://r300201.kujo-jotaro.com/golden-kamuy/1/5.1080.aa4cf594d058d9dc.mp4?hash1=9bbbc1d965d673ca2b6080e31c8d7ddc&hash2=41b99450d1977e2004be289d34780297",
    _6: "https://r300201.kujo-jotaro.com/golden-kamuy/1/6.1080.66cff113f9b65bf0.mp4?hash1=c813ff582cee2853708d89e18f92b8fe&hash2=a05a6bde199b78e6a981b6e28f4bc46c",
    _7: "https://r300201.kujo-jotaro.com/golden-kamuy/1/7.1080.b171653a5a7c0d57.mp4?hash1=4f64c708fc044f071b1e6a0c21145075&hash2=56b5a1e1a5d43fe09c4fc254ab493fd8",
    _8: "https://r300201.kujo-jotaro.com/golden-kamuy/1/8.1080.dc96bcff12eba666.mp4?hash1=7ce4901a32e5623df3e470dec1849493&hash2=832955d874fbd4aff34f6f92de884ed6",
    _9: "https://r300201.kujo-jotaro.com/golden-kamuy/1/9.1080.e071dca65d1a321f.mp4?hash1=292b6426e7269b9fe83f01f384d99bca&hash2=4928fbae8cf559059f0697d927772ded",
    _10: "https://r300201.kujo-jotaro.com/golden-kamuy/1/10.1080.5787f623c9930a1d.mp4?hash1=2239538ea013a2ca98df7cbc8a928e23&hash2=6edbd4ac3477afc425fa6b71b24a0cde",
    _11: "https://r300201.kujo-jotaro.com/golden-kamuy/1/11.1080.229224d4678d5f4b.mp4?hash1=58ec5ce3be164522c7e62426643092c9&hash2=9f93e25a16885d784d96f766514b15b4",
    _12: "https://r300201.kujo-jotaro.com/golden-kamuy/1/12.1080.0b38615f22c6cc37.mp4?hash1=8b1c9fee6ddbd1ddac7342946f7f7b9f&hash2=f45e81e9bfbb92f7778e895c38dc6b34",
  },
  s_2: {
    _1: "https://r300201.kujo-jotaro.com/golden-kamuy/2/1.1080.209dde157a52a0aa.mp4?hash1=f80ece94757a0893f3de6b569d8ce39c&hash2=f7b679c7ac3f85f62835fbf133f8b4ed",
    _2: "https://r300201.kujo-jotaro.com/golden-kamuy/2/2.1080.c3cec21e674d6804.mp4?hash1=da0dcba4d203d739aed99bc7f9dfd256&hash2=1317bd4671724ef101b5c9acee09b526",
    _3: "https://r300201.kujo-jotaro.com/golden-kamuy/2/3.1080.1414bfb81bf48614.mp4?hash1=60a0d4e7a57ad7461e31ed86342815a7&hash2=5aa61fa541f80385289da36d91c8ab7d",
    _4: "https://r300201.kujo-jotaro.com/golden-kamuy/2/4.1080.14e9c5ee1d03dd81.mp4?hash1=2d9f0532565fc700f58a9bbe2b29433d&hash2=c6b450d69a2724bb07a07d801cd85c2d",
    _5: "https://r300201.kujo-jotaro.com/golden-kamuy/2/5.1080.f95e90733f2fdf49.mp4?hash1=bd6e1f2d08980e8071858c4aca2b596c&hash2=beb647bc3f9ed624f43cbda5b187c18a",
    _6: "https://r300201.kujo-jotaro.com/golden-kamuy/2/6.1080.bc1b55739247b6d1.mp4?hash1=82e138fa90e75bc1145bdab5e59b7188&hash2=e4679248336b607d113132504e7840f0",
    _7: "https://r300201.kujo-jotaro.com/golden-kamuy/2/7.1080.630fe7483f32aa47.mp4?hash1=3a6981b68ca9fa92beb8de24c6e32557&hash2=e133f4ad391699dd284c9eaf09ac8486",
    _8: "https://r300201.kujo-jotaro.com/golden-kamuy/2/8.1080.8a21c3d9e65801b1.mp4?hash1=ca0e3539741dad388691c61880b59f8e&hash2=a126eb1ef3732cd2af9190f1873fbfc4",
    _9: "https://r300201.kujo-jotaro.com/golden-kamuy/2/9.1080.fd30f959c6c96a3a.mp4?hash1=691213e5d1de4813a5a1257c2c0f1654&hash2=e014c7c92620a768970ce39d18c0bc49",
    _10: "https://r300201.kujo-jotaro.com/golden-kamuy/2/10.1080.f5a23a5daabe767a.mp4?hash1=fedd4495cdd75cb405c9f155c1c1d95f&hash2=1627454ffe64ff587ef2bde90e5c3d12",
    _11: "https://r300201.kujo-jotaro.com/golden-kamuy/2/11.1080.a03fe026607a385d.mp4?hash1=24ed0dc6adf0ce94ef2951e1d38ee676&hash2=dff62e02d739600c3ef15240404d277a",
    _12: "https://r300201.kujo-jotaro.com/golden-kamuy/2/12.1080.d58ed6289f62c32f.mp4?hash1=13a7be02565b723723eba02d4382a762&hash2=f7f9a352e980dd6f6e7fadb18d8ad7b1",
  },
  s_3: {
    _1: "https://r300201.kujo-jotaro.com/golden-kamuy/3/1.1080.66beefde2a56a166.mp4?hash1=7b9425a07d813926a6a970a6637ba54b&hash2=9f1a22074d76266add080e85ba2a27f4",
    _2: "https://r300201.kujo-jotaro.com/golden-kamuy/3/2.1080.0d69541215581d32.mp4?hash1=42f9aa837de597bf6a89368aa31bba05&hash2=8eb386e1b1b3a1a93475b68875697b24",
    _3: "https://r300201.kujo-jotaro.com/golden-kamuy/3/3.1080.8f966bc2f38a2098.mp4?hash1=ea85988de623444d286897cdb1c94e1e&hash2=e38ddffd458e0a4b105246a2608961ed",
    _4: "https://r300201.kujo-jotaro.com/golden-kamuy/3/4.1080.0d2ea7bc0f234c08.mp4?hash1=8848e1fc0a995d6cbf64e161ab0f051c&hash2=87e58bb85db1c0ad806ba52284890c41",
    _5: "https://r300201.kujo-jotaro.com/golden-kamuy/3/5.1080.af85ef45f5702ef1.mp4?hash1=b071479316022097461e148d9b83af05&hash2=fb221d2e6605f9f941917eaacbccb43c",
    _6: "https://r300201.kujo-jotaro.com/golden-kamuy/3/6.1080.dfb8fddcb6e2ead3.mp4?hash1=d5b06ac3f6dfed8b2f7811d142af9e16&hash2=afbe786f507480226cbbdb44aaa73d41",
    _7: "https://r300201.kujo-jotaro.com/golden-kamuy/3/7.1080.dfe7bd3695dd8dec.mp4?hash1=7582793fd95fc6f086f6a7af9028a8e2&hash2=f814308c895db271caaa63015eaee203",
    _8: "https://r300201.kujo-jotaro.com/golden-kamuy/3/8.1080.5d671e6670643940.mp4?hash1=db111c679446c75434749a48981172c8&hash2=c0fcbf079c7fc53072c7ce5558b50d0a",
    _9: "https://r300201.kujo-jotaro.com/golden-kamuy/3/9.1080.4dcecc3d80e4afaf.mp4?hash1=a4a7694409c664584b10c92094cafc71&hash2=8bdb6ef00dff1a09df5de201c4636c89",
    _10: "https://r300201.kujo-jotaro.com/golden-kamuy/3/10.1080.c3fcfdaf8b13d6d9.mp4?hash1=e9fd4a67a622a801c19c0b20f6ba0d0c&hash2=99ff4c9e29899afdc86cfb57a9a16c3a",
    _11: "https://r300201.kujo-jotaro.com/golden-kamuy/3/11.1080.990ce262c528831a.mp4?hash1=81e9e825b192b4cd3080aa6e42dc1a8d&hash2=0d85ca49610cd9006b591bab7cda631d",
    _12: "https://r300201.kujo-jotaro.com/golden-kamuy/3/12.1080.c4e73317690ffd33.mp4?hash1=336956d88342237c1da404cff0b64859&hash2=fe50f5d3524df76320257704a02150a5",
  },
  s_4: {
    _1: "https://r300201.kujo-jotaro.com/golden-kamuy/4/1.1080.ecc4b283d5ece02e.mp4?hash1=d870cdcbe044f01837a500156f2b733f&hash2=df8ed43d64f6e72479112941a71cd108",
    _2: "https://r300201.kujo-jotaro.com/golden-kamuy/4/2.1080.234f93e5f1715dcc.mp4?hash1=1796af3b766bded5ac2dfc971a11c196&hash2=d84f32434f00cf10532eb776a9f3bf0b",
    _3: "https://r300201.kujo-jotaro.com/golden-kamuy/4/3.1080.8d641fb7fd652f2d.mp4?hash1=be6ddb887afb20d0c4b8def8d8f2bec5&hash2=27c78b078b69a5de922bea1c7534c52a",
    _4: "https://r300201.kujo-jotaro.com/golden-kamuy/4/4.1080.904495f12f57ccfa.mp4?hash1=65b042a1a6368f64ed63a8f99ab98463&hash2=511e4ce6de10a06926f1ff074c59d5fb",
    _5: "https://r300201.kujo-jotaro.com/golden-kamuy/4/5.1080.8ad477d4c2f1504f.mp4?hash1=acbc2ebc93bf589409194eb769fe43f1&hash2=28b18d2a6ea995f14196d3dd25a2b382",
    _6: "https://r300201.kujo-jotaro.com/golden-kamuy/4/6.1080.8ffc95baa9ac0525.mp4?hash1=62eddc9035a914451c0fa76ffecac4fc&hash2=4340f902557d816a19a7198c04160ae7",
  },
};
