<?php

use Tonic\UnauthorizedException;
use Tonic\Response;
/**
 * @uri /client
 * 
 */
class Client extends BaseResource {

	/**
	 * @method GET
	 * @navigation /client
	 * @addCss custom-js.css
	 */
	function execute() {
		$smarty = $this->container['smarty'];
		$log = $this->container['log'];
		$log->addDebug($this->getLoggedUsername().' executing '.get_class($this).'.'.__FUNCTION__.'() '.$_SERVER['REQUEST_URI'], array("GET"=>$_GET, "POST"=>$_POST));
		
		
		return $smarty->fetch('client.html');
	}
	
}

?>
