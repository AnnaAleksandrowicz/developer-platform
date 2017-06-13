# Kaltura API Overview

Building video experiences consists of ingesting media files, playing back videos, and reviewing usage and engagement analytics. In between, there is a world of nuances required for your unique use-case and application. Kaltura VPaaS is built on the principles of atomic services, SDKs, and tools that allow you full control and flexibility over every element and process in your media’s lifecycle.

## Tools and Guides
The [Kaltura Developer Tools](https://developer.kaltura.com) and the [VPaaS Developer Guides](https://vpaas.kaltura.com/documentation/01_VPaaS-API-Getting-Started/Getting-Started-VPaaS-API.html), enable you to get started building your own video experiences and workflows, and provide you with everything you need to further explore the platform’s capabilities and to become an expert.

If you're just starting out with Kaltura, we recommend reading: [Getting Started with Kaltura VPaaS](https://vpaas.kaltura.com/documentation/01_VPaaS-API-Getting-Started/Getting-Started-VPaaS-API.html).

## Using the API
Kaltura VPaaS API implements an HTTP POST/GET url-encoded requests structure. The API consist of service and actions for querying, setting, updating and listing entities as well as for configuring account settings, and for executing processes. Service and actions are grouped according to the entity type they are applied on, and provide all actions relevant to the specific entity.

This API documentation provides specific information on:

* Kaltura Services and their related actions
* Kaltura Objects and their related properties
* Kaltura Enumerated Types and their values

A prerequisite for using Kaltura APIs is obtaining Kaltura account ID, aka the Partner ID (or pid).
[Register for a Kaltura VPaaS account](https://vpaas.kaltura.com/register.php?utm_source=developertools&utm_campaign=login&utm_medium=website).

## Resources
Please explore these tools too:
* The Kaltura VPaaS [Developer Guides](https://vpaas.kaltura.com/documentation/01_VPaaS-API-Getting-Started/Getting-Started-VPaaS-API.html).
* The Kaltura VPaaS [Interactive Workflows](https://developer.kaltura.com/workflows), providing a quick way to learn about video workflows with Kaltura and see from real examples how to write applicatiosn with Kaltura.
* The [API Test Console](https://developer.kaltura.com/console), providing a quick exploration and discovery for each service and action, allowing you to try each action easily, and serving as code-example generator.

For support, please visit [Kaltura Community Forums](http://www.kaltura.org/forums).

While the Kaltura API is fully REST-based and can be be used via constructing and calling direct URLs as such [the_action_to_execute](http://www.kaltura.com/api_v3/index.php/service/[the_service_to_use]/action/)

Notice the tokens: 
•	[the_service_to_use] — The service (entity in the system) to call. You can find the list of services in the side-panel at https://developer.kaltura.com under each of the categories (e.g. session,appToken, user, media, etc.)
•	[the_action_to_execute] — The action you wish to execute on the service. You can find the list of actions available for each service in the side-panel at https://developer.kaltura.com under each of the services (e.g. session.start, session.end, etc.)
For example, to use the ping action to check if the API is up, you can use the system service and ping action:
http://www.kaltura.com/api_v3/index.php/service/system/action/ping

>Note: Most of the services will require a proper Kaltura Session key, so along your call, you'll also need to create a Kaltura Session (aka KS) to be passed as a parameter in your request. For example to retrieve a list of media entries, you will need to call the list action on the media service, providing a proper KS key. Therefore, the correct order is to 1. call session.start to provide your account credentials, and then 2. pass the result to the media.list API.
https://www.kaltura.com/api_v3/service/media/action/list/ks/[the_ks_generated_using_session.start]

You can read more in detail at: 
•	https://vpaas.kaltura.com/documentation/VPaaS-API-Getting-Started/how-to-create-kaltura-session.html
•	https://vpaas.kaltura.com/documentation/VPaaS-API-Getting-Started/Kaltura_API_Authentication_and_Security.html
•	https://vpaas.kaltura.com/documentation/VPaaS-API-Getting-Started/introduction-kaltura-client-libraries.html

Additionally, if you look at the API docs at https://developer.kaltura.com – you’ll see each request’s GET Url at the top of the page. 
For example, if you follow the guide for clipping & trimming at https://blog.kaltura.com/server-side-clipping-and-trimming/ - you’ll see that in order to TRIM an entry the service you’ll need to use is called media, and the action is called updateContent (media.updateContent). You’ll also notice that the input of this API action expected to be 2 parameters: 
•	The id of the entry to replace with the newly trimmed entry.
•	A resource object representing the operations to execute on that entry.
The resource is an object of type: KalturaOperationResource, and it in itself also expects to be filled with an object of KalturaClipAttributes that describes the operations to perform on the entry and KalturaEntryResource that describes the entry to carry the operation on.

Since there are two objects and number of input parameters to fill in this API action, as a URL this REST call might be a bit complex to construct manually. Which is why, as Jess mentioned before, we do not recommend making direct calls via REST calls without using a client library – Kaltura’s API is very robust and requires constructing objects for your requests, so requests can end up with complex URL structures that if constructed manually might result in semantic mistakes.
Instead – we provide native client libraries for many programming languages that you can use in your applications.


