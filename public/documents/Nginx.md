## Nginx 基本使用教程

### 1. 基本命令

---

- `sudo nginx`			            启动
- `sudo nginx -t`                查看配置
- `sudo nginx -s reload`  重载配置
- `sudo nginx -s reopen`  重启
- `sudo nginx -s stop`      关闭

### 2. 配置文件

---

```shell
# /etc/nginx/nginx.conf
# 注释
# ... 全局指令块
user nginx;											# 用户
worker_processes	1;								# 进程数
error_log			/var/log/nginx/error.log warn;	# 错误日志，错误级别
pid					/var/run/nginx.pid;				# 进程运行文件

events {						# 网络连接指令块
	worker_connections	1024;	# 每个进程最大连接数
}

http {											# http 代理指令块
	include			/etc/nginx/mime.types;		# 文件扩展名与文件类型映射表
	default_type	application/octet-stream;	# 默认文件类型
	
	server {						# 代理服务器指令块
		listen		80;				# 监听端口，http 默认端口 80
		server_name	itroger.cn;		# 监听地址
		return 		301 https://$server_name$request_uri;	# 重定向
	}
	
	server {
		listen				443 ssl http2;	# 监听端口，https 默认端口 443
		server_name			itroger.cn;
		ssl_certificate		/etc/nginx/cert/cert.crt;	# ssl 相关配置
		ssl_certificate_key	/etc/nginx/cert/cert.ket;
		ssl_session_timeout	5m;
		ssl_ciphers 		ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
		ssl_protocols		TLSv1 TLSv1.1 TLSv1.2;
		ssl_prefer_server_ciphers	on;
		
		location / {								# 请求 url 过滤指令块
			proxy_pass	http://localhost:3000/;		# 反向代理，转发地址
		}
		
		location /socket.io {
			proxy_pass			http://localhost:3000/socket.io;
			proxy_http_version	1.1;				# websocket 相关配置
			proxy_set_header	Upgrade $http_upgrade;
			proxy_set_header	Connection "upgrade";
		}
		
		location /api/ {
			proxy_pass	http://localhost:8000/;
		}
	}
}
```
