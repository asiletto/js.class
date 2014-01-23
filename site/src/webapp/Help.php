<?php

use Tonic\UnauthorizedException;
use Tonic\Response;
/**
 * @uri /help
 * 
 */
class Help extends BaseResource {

	/**
	 * @method GET
	 * @navigation /help
	 */
	function execute() {
		$smarty = $this->container['smarty'];
		$log = $this->container['log'];
		$log->addDebug($this->getLoggedUsername().' executing '.get_class($this).'.'.__FUNCTION__.'() '.$_SERVER['REQUEST_URI'], array("GET"=>$_GET, "POST"=>$_POST));
		
		
		return $smarty->fetch('help.html');
	}
	
}

?>
