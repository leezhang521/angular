'use strict';var ElementSchemaRegistry = (function () {
    function ElementSchemaRegistry() {
    }
    ElementSchemaRegistry.prototype.hasProperty = function (tagName, propName) { return true; };
    ElementSchemaRegistry.prototype.getMappedPropName = function (propName) { return propName; };
    return ElementSchemaRegistry;
})();
exports.ElementSchemaRegistry = ElementSchemaRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9zY2hlbWFfcmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUxLcGJVNjNELnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvc2NoZW1hL2VsZW1lbnRfc2NoZW1hX3JlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbIkVsZW1lbnRTY2hlbWFSZWdpc3RyeSIsIkVsZW1lbnRTY2hlbWFSZWdpc3RyeS5jb25zdHJ1Y3RvciIsIkVsZW1lbnRTY2hlbWFSZWdpc3RyeS5oYXNQcm9wZXJ0eSIsIkVsZW1lbnRTY2hlbWFSZWdpc3RyeS5nZXRNYXBwZWRQcm9wTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7SUFHQUMsQ0FBQ0E7SUFGQ0QsMkNBQVdBLEdBQVhBLFVBQVlBLE9BQWVBLEVBQUVBLFFBQWdCQSxJQUFhRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN4RUYsaURBQWlCQSxHQUFqQkEsVUFBa0JBLFFBQWdCQSxJQUFZRyxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsRUgsNEJBQUNBO0FBQURBLENBQUNBLEFBSEQsSUFHQztBQUhZLDZCQUFxQix3QkFHakMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFbGVtZW50U2NoZW1hUmVnaXN0cnkge1xuICBoYXNQcm9wZXJ0eSh0YWdOYW1lOiBzdHJpbmcsIHByb3BOYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cbiAgZ2V0TWFwcGVkUHJvcE5hbWUocHJvcE5hbWU6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiBwcm9wTmFtZTsgfVxufVxuIl19