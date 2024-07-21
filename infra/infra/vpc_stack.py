import logging
from aws_cdk import (
    aws_ec2 as ec2,
    Stack,
)
from constructs import Construct

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class VpcStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        try:
            self.vpc = ec2.Vpc(
                self, "ShopVPC",
                max_azs=3,
                cidr="10.0.0.0/16",
                subnet_configuration=[
                    ec2.SubnetConfiguration(
                        subnet_type=ec2.SubnetType.PUBLIC,
                        name="Public",
                        cidr_mask=24
                    ),
                    ec2.SubnetConfiguration(
                        subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS,
                        name="Private",
                        cidr_mask=24
                    )
                ],
                nat_gateways=1,
            )

            logger.info("VpcStack created successfully")

        except Exception as err:
            logger.error(f"Error in VpcStack: {err}")