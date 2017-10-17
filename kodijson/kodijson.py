"""XBMC/Kodi jsonclient library module."""
import json
import requests

# this list will be extended with types dynamically defined
#动态定义的扩展类型
__all__ = ["PLAYER_VIDEO",
           "KodiTransport",
           "KodiJsonTransport",
           "Kodi",
           "KodiNamespace", ]

# Kodi constant
# Kodi 常量
PLAYER_VIDEO = 1

# Dynamic namespace class injection
# 动态类注入命名空间
__KODI_NAMESPACES__ = (
    "Addons", "Application", "AudioLibrary", "Favourites", "Files", "GUI",
    "Input", "JSONRPC", "Playlist", "Player", "PVR", "Settings", "System",
    "VideoLibrary","Textures", "XMBC")


'''
Addons           List, enable and execute addons列出、使能、执行插件
Application      Application information and control应用程序信息及控制
AudioLibrary     Audio Library information音频库信息
Favourites       Favourites GetFavourites and AddFavourite收藏的获得与增加
Files            Shares information & filesystem listings共享信息及文件系统列表
GUI              Window properties and activation窗口属性及激活
Input            Allows limited navigation within Kodi允许有限的Kodi内部的导航
JSONRPC          A variety of standard JSONRPC calls一系列的JSONRPC标准调用说明
Player           Manages all available players控制所有的播放器
Playlist         Playlist modification播放列表修改
Profiles         Support for Profiles operations to xbmc.支持xbmc属性操作 
PVR              Live TV control 实时TV控制
Settings         Allows manipulation of Kodi settings.允许Kodi设置操作
System           System controls and information 系统控制及信息
Textures         Supplies GetTextures and RemoveTexture. Textures are images.支持获得纹理及删除纹理
VideoLibrary     Video Library information视频库信息
XBMC             Dumping ground for very Kodi specific operations 模型特定的Kodi操作
'''
class KodiTransport(object):
    """Base class for Kodi transport."""

    def execute(self, method, args):
        """Execute method with given args."""
        pass  # pragma: no cover


class KodiJsonTransport(KodiTransport):
    """HTTP Json transport."""

    def __init__(self, url, username='xbmc', password='xbmc'):
        self.url = url
        self.username = username
        self.password = password
        self._id = 0

    def execute(self, method, *args, **kwargs):
        headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'python-kodi'
        }
        # Params are given as a dictionnary
        # 参数是以字典的形式提供
        if len(args) == 1:
            args = args[0]
            params = kwargs
            # Use kwargs for param=value style
        else:
            args = kwargs
        params = {}
        params['jsonrpc'] = '2.0'
        params['id'] = self._id
        self._id += 1
        params['method'] = method
        params['params'] = args

        values = json.dumps(params)

        resp = requests.post(self.url,
                             values.encode('utf-8'),
                             headers=headers,
                             auth=(self.username, self.password))
        resp.raise_for_status()
        return resp.json()


class Kodi(object):
    """Kodi client."""

    def __init__(self, url, username='xbmc', password='xbmc'):
        self.transport = KodiJsonTransport(url, username, password)
        # Dynamic namespace class instanciation
        # we obtain class by looking up in globals
        #动态命名空间，查询全局变量获得类名
        _globals = globals()
        for cl in __KODI_NAMESPACES__:
            setattr(self, cl, _globals[cl](self.transport))

    def execute(self, *args, **kwargs):
        """Execute method with given args and kwargs."""
        self.transport.execute(*args, **kwargs)


class KodiNamespace(object):
    """Base class for Kodi namespace."""

    def __init__(self, kodi):
        self.kodi = kodi

    def __getattr__(self, name):
        klass = self.__class__.__name__
        method = name
        kodimethod = "%s.%s" % (klass, method)

        def hook(*args, **kwargs):
            """Hook for dynamic method definition."""
            #动态方法定义钩子
            return self.kodi.execute(kodimethod, *args, **kwargs)

        return hook

# inject new type in module locals
_LOCALS_ = locals()
for _classname in __KODI_NAMESPACES__:
    # define a new type extending KodiNamespace
    # equivalent to
    #
    # class Y(KodiNamespace):
    #    pass
    _LOCALS_[_classname] = type(_classname, (KodiNamespace, ), {})
    # inject class in __all__ for import * to work
    __all__.append(_classname)
