(function(){YAHOO.Bubbling.fire("registerAction",{actionName:"onViewPrintablePDF",fn:function a(b){this.modules.actions.genericAction({success:{callback:{fn:function c(d){Alfresco.util.PopupManager.displayPrompt({title:this.msg("alfresco.tutorials.doclib.action.callWebScript.msg.success"),text:JSON.stringify(d.json),buttons:[{text:this.msg("button.ok"),handler:function e(){this.destroy()},isDefault:true},{text:this.msg("button.cancel"),handler:function f(){this.destroy()}}]})},scope:this}},failure:{message:this.msg("alfresco.tutorials.doclib.action.callWebScript.msg.failure",b.displayName,Alfresco.constants.USERNAME)},webscript:{name:"sample/fileinfo?nodeRef={nodeRef}",stem:Alfresco.constants.PROXY_URI,method:Alfresco.util.Ajax.GET,params:{nodeRef:b.nodeRef}},config:{}})}})})();