public class MainActivity extends AppCompatActivity {

    WebView web;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);

        web = new WebView(this);
        setContentView(web);

        web.getSettings().setJavaScriptEnabled(true);
        web.addJavascriptInterface(new JSBridge(this, web), "Android");

        web.loadUrl("file:///android_asset/index.html");
    }
}
