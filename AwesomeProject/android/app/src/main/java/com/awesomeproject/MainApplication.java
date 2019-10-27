package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.zmxv.RNSound.RNSoundPackage;

import com.dylanvann.fastimage.FastImageViewPackage;
import io.palette.RNPalettePackage;
import com.rnfs.RNFSPackage;



import cl.hasaezs.rndominantcolor.RNDominantColorPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.terrylinla.rnsketchcanvas.SketchCanvasPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNExitAppPackage(),
            new RNSoundPackage(),
            new FastImageViewPackage(),
            new RNPalettePackage(),
            new RNFSPackage(),
            new RNDominantColorPackage(),
            new RNViewShotPackage(),
            new RNGestureHandlerPackage(),
            new SketchCanvasPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
