# Wireshark .pcapng capture from MacMini (20210823)

These links will gradually be made functionall as time goes by. Should you have immediate inquiries see contact info at the bottom.

- icloud :  /Users/nstephane/Library/Mobile\ Documents/com~apple~CloudDocs/Wireshark\ captures/macmini20210823.pcapn

- gdrive: <https://drive.google.com/drive/folders/1KYLGDAu7n_eMzzKFAJeqAitXET-uOzZ8?usp=sharing>

- onedrive: <https://onedrive.live.com/?id=root&cid=F1C17304E7180CB6#id=F1C17304E7180CB6%2161270&cid=F1C17304E7180CB6>

- github: <https://github.com/stepvda/captures>


## Possible hacking and malware types that were used
To investigate further:

- cache poisoning
	- search result caching on iOS (similar like contact search result leading to <https://www.icloud.com/enable_cookies> )
	- web content caching (though a bit obvious)  
- SSL certificate chain that seems slightly off:  
		* RootCA is a different one then what I previous recall or as in the case of BigTech, they might have their own whereas it isn't used.  
		* Intermediate validity period   
		* Certif validity period 
		* Certif domain names, include too many differnt names (should be onlye one top level e.g.: xxxxwhateverxxxx.myveryowndomain.com and not xxelsethingx.xmasween.com )  
		* misalignment of validity dates across 3 levels. Such as Intermediate being valid 3 years before site certif was issued and site certif being valid 3 years after the Intermediate expires => a *fake* Intermediate might be injected this way. 

		

- Man in the Middle attach

- Mail server proxy running on localhost and possibly resolving real mail server addresses through dns poisoning 
 
- Remote Control of screen/browser
    * possibly using Chrome Remote Desktop in a malware version
 
- Virtual NIC spaghetti hiding network traffic with _tun_ too big _netmasks_ and _additional IP addresses_ assigned especially when there is an overly elaborate use of _IPv6_.

- Also real devices (that are not in use) can be abused to pose as NIC's and play a role in the obfuscating of network flows via bridging spaghetti.

- spoofing
  * MAC address spoofing: becomes apparent when chaning IP's (e.g. dhcp). This more frequently used on Wifi.

  * entire computer + account spoofing (using iCloud)
    - could be done with a simple restore from an offline backup copy 
    - likekly also done on iOS using iCloud backup restore to hacker spoofed version of own device. 

 - System files in /System/Library are not original install files including some .kext kernel extensions. These files were not picked up by virusscan by Bitdefender AV. I uploaded a zip file with the suspicious kernel extensions for further analysis for malware: [suspicious kexts](https://drive.google.com/file/d/15BIElGbVEdLKuQGq7Yk6JEZAbEjInsIY/view?usp=sharing)  
   
	
	
## Would you like to know more?
__Contact me directly__:  
email1: <stephane@stepvda.net>  
email2: <stepvda@mac.com>  
(if in doubt send to both email addresses at once)  
__twitter__: [@stepvda](https://twitter.com/stepvda)    
__linkedin__: [stepvda](https://www.linkedin.com/in/stepvda)   
__location__: Brussels, Belgium
