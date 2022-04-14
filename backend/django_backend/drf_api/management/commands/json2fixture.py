from django.core.management.base import BaseCommand, CommandParser
import json
from datetime import datetime


class Command(BaseCommand):
    help = "Export Item data.json as Item model fixture"

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument("jsonfile", type=str)

    def handle(self, *args, **options):
        item_list = []
        with open(options["jsonfile"]) as f:
            json_object_list = json.load(f)
        for object in json_object_list:
            item_list.append(
                {
                    "model": "drf_api.item",
                    "pk": object["id"],
                    "fields": {
                        "city": object["city"],
                        "start_date": datetime.strptime(
                            object["start_date"], "%m/%d/%Y"
                        ).strftime("%Y-%m-%d"),
                        "end_date": datetime.strptime(
                            object["end_date"], "%m/%d/%Y"
                        ).strftime("%Y-%m-%d"),
                        "price": object["price"],
                        "status": object["status"],
                        # "color": int(object["color"][1:], 16),
                        "color": object["color"],
                    },
                }
            )
        self.stdout.write(self.style.SUCCESS(json.dumps(item_list)))
