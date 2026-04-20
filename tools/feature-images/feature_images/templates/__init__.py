from .checklist_card import render_checklist_card
from .comparison_split import render_comparison_split
from .concept_map import render_concept_map
from .faq_card import render_faq_card
from .hub_overview import render_hub_overview
from .stack_blueprint import render_stack_blueprint
from .timeline_cover import render_timeline_cover
from .workflow_map import render_workflow_map


TEMPLATES = {
    "workflow_map": render_workflow_map,
    "hub_overview": render_hub_overview,
    "stack_blueprint": render_stack_blueprint,
    "comparison_split": render_comparison_split,
    "timeline_cover": render_timeline_cover,
    "checklist_card": render_checklist_card,
    "concept_map": render_concept_map,
    "faq_card": render_faq_card,
}
