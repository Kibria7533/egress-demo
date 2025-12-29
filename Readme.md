kubectl get destinationrule -A
curl -m 5 http://google.com -v

curl -v http://nid.internal.local:32000/nid-data



Inside egress gateway pod:
traceroute -T -p 32000 192.168.1.125


Inside ec-service pod:
traceroute -T -p 32000 nid.internal.local
